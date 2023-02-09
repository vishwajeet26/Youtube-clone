import React from "react";
// Material-Ui
import { Box, Stack } from "@mui/material";
// Constants
import { videosModel } from "../utils/models";
// Components
import { VideoCard, ChannelCard } from "./";

interface VideosProps {
  videos: videosModel[];
  direction?: 'column';
}
const Videos: React.FC<VideosProps> = ({ videos, direction }) => {
  if(!videos) return <p>Loading...</p>
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.title}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
