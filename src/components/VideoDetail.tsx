import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
// Material ui
import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
// Constants
import { fetchFromApi } from "../utils/fetchFromApi";
import { videosModel } from "../utils/models";
// Components
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<videosModel>();
  const [videos, setVideos] = useState<videosModel[]>();
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data)
    );
  }, [id]);
  if (!videoDetail?.snippet) return <p> Loading... </p>;
  const {
    snippet: { title, channelId, channelTitle },
    statistics,
  } = videoDetail!;
  return (
    <Box minHeight={"95vh"} sx={{ background: "black" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls={true}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={"subtitle1"} color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount!).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount!).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>{" "}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos!} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
