import axios from "axios";

export const userRequest = axios.create({
  baseURL: "http://elabapi.forezone.buzz/",
  headers: {},
});
