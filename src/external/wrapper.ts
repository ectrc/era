import { useToken } from "src/state/token";
import era from "./client";

export const queryUser = async (): Promise<User> => {
  const [user, err] = await era.user();

  if (err) {
    useToken.getState().setWorking(false);
    return user.data;
  }

  useToken.getState().setWorking(true);

  return user.data;
};

export const queryBlogs = async (): Promise<Blog[]> => {
  const [blogs, err] = await era.blogs();

  if (err) {
    throw err;
  }

  return blogs.data;
};

export const queryBanners = async (): Promise<Banner[]> => {
  const [banners, err] = await era.banners();

  if (err) {
    throw err;
  }

  return banners.data;
};

export const queryStats = async (): Promise<UserStats> => {
  const [stats, err] = await era.stats();

  if (err) {
    throw err;
  }

  return stats.data;
};

export const queryShop = async (): Promise<Shop> => {
  const [shop, err] = await era.shop();

  if (err) {
    throw err;
  }

  return shop.data;
};

export const queryServers = async (): Promise<Server[]> => {
  const [servers, err] = await era.servers();

  if (err) {
    throw err;
  }

  return servers.data;
};

export const queryInsights = async (): Promise<Queue> => {
  const [queue, err] = await era.insights();

  if (err) {
    throw err;
  }

  return queue.data;
};

export const queryBuilds = async (): Promise<Build[]> => {
  const [builds, err] = await era.builds();

  if (err) {
    throw err;
  }

  return builds.data;
};
