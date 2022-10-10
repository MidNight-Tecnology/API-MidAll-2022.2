import axios from "axios";

const crud = axios.create({
  baseURL: "http://localhost:4512",
});

export default crud;