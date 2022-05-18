import axios from "axios";

export default axios.create({
  baseURL: "https://shrouded-sea-21115.herokuapp.com/api",
  header: {
    "Access-Control-Allow-Origin": "*",
  },
});
