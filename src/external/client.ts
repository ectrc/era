import axios from "axios";

import { shop, banners } from "./static";

export const axiosClient = axios.create({
  baseURL: "https://api.v1.external.erafn.org/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const era = {
  banners,
  shop,
};

export default era;