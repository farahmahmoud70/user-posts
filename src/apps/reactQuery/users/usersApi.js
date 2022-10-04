import axios from "axios";
import appConfig from "../../config/appConfig.json";

export const fetchUsers = async() => {
  return await axios.get(appConfig.services.users);
};
