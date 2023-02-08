import React, { useEffect, useState } from "react";
// Material-ui
import { Box, Stack, Typography } from "@mui/material";
// Constants
import { fetchFromApi } from "../utils/fetchFromApi";
import { videosModel } from "../utils/models";
// Components
import { SideBar, Videos } from "./";

const Feed: React.FC = () => {
  const [selectedCategory, setaSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<videosModel[]>([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data)
    );
  }, [selectedCategory]);
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row", background: "black" } }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setaSelectedCategory}
        />
        <Typography
          sx={{ mt: 1.5, color: "#fff" }}
          className="copyright"
          variant="body2"
        >
          - Vishwajeet Singh
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
