import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Material-ui
import { Box, Stack, Typography } from "@mui/material";
// Constants
import { fetchFromApi } from "../utils/fetchFromApi";
import { videosModel } from "../utils/models";
// Components
import { SideBar, Videos } from "./";

const SearchFeed: React.FC = () => {
  const [videos, setVideos] = useState<videosModel[]>([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, background: 'black' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
