import axios from "axios";
import appConfig from "../../config/appConfig.json";

export const fetchUserPosts = async (userId) => {
  return await axios.get(
    appConfig.services.posts.replace("{0}", userId)
  );
};
