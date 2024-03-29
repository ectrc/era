import axios from "axios";

import {
  shop,
  banners,
  user,
  stats,
  blogs,
  servers,
  insights,
  builds,
} from "./axios";

export const axiosClient = axios.create({
  baseURL: "https://api.v1.external.erafn.org/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const era = {
  banners,
  shop,
  user,
  stats,
  blogs,
  servers,
  insights,
  builds,
};

export default era;
