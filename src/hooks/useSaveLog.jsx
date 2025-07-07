import axios from "axios";
import { useAxios } from "./useAxios";

export const useSaveLog = () => {
  const { handleRequest } = useAxios();
  // const url = import.meta.env.VITE_JSON_SERVER_URL;
  const url = "http://localhost:3001";
  const save = (data) => handleRequest(axios.post, `${url}/logs`, data);

  return save;
};
