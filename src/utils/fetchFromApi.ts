import axios from "axios";
// Models
import { videosModel } from "./models";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "0b7347cd4fmshd054c11caa3c45ap168b16jsn0a131fdf02b5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url: string): Promise<videosModel[]> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data.items;
};
