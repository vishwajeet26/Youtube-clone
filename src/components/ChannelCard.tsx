import React from "react";
import { Link } from "react-router-dom";
// Material-Ui
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
// Icon
import { CheckCircle } from "@mui/icons-material";
// Constants
import { demoProfilePicture } from "../utils/constants";
// Models
import { videosModel } from "../utils/models";

interface ChannelCardProps {
  channelDetail: videosModel;
}
const ChannelCard: React.FC<ChannelCardProps> = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        />
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </Box>
  );
};

export default ChannelCard;
