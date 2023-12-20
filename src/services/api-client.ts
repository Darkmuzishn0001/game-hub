import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d08a4ae446774f22bb3d9aa469efe331",
  },
});
