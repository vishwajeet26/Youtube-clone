import React from "react";
// Material-Ui
import { Box, Stack } from "@mui/material";
// Constants
import { videosModel } from "../utils/models";
// Components
import { VideoCard, ChannelCard } from "./";

interface VideosProps {
  videos: videosModel[];
}
const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
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
