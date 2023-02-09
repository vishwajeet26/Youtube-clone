import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Material ui
import { Box } from "@mui/material";
// Constants
import { fetchFromApi } from "../utils/fetchFromApi";
import { videosModel } from "../utils/models";
// Components
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<videosModel | null>(null);
  const [videos, setVideos] = useState<videosModel[]>([]);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data)
    );
  }, [id]);
  return (
    <Box minHeight="95vh" sx={{ background: "black" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail!}
          styles={{ marginTop: "-110px" }}
        />
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
