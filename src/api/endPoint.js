import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  header: {
    "Access-Control-Allow-Origin": "*",
  },
});
