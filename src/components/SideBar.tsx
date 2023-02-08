import React from "react";
// Material-ui
import { Stack } from "@mui/material";
// Constants
import { categories } from "../utils/constants";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {React.createElement(category.icon)}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
