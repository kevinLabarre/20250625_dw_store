import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSaveLog } from "./useSaveLog";

export const useInstanceAxios = () => {
  // Attnetion : les variables d'env. doivent commencer par "VITE"
  const url = import.meta.env.VITE_JSON_SERVER_URL;

  const navigate = useNavigate();
  const save = useSaveLog();

  const jsonServer = axios.create({
    baseURL: url,
  });

  // METHODE 1 :

  // Injecter avec .use
  jsonServer.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      console.log("TOKEN INJECTE !!");
      config.headers["Authorization"] = `Bearer ${token}`;
    } else console.log("Pas de token");

    // Pour rajouter un délai lors de l'envoi de nos requêtes
    // new Promise((resolve) => setTimeout(() => resolve(config), 1000));

    return config;
  });

  // Intercepeur de la Réponses
  jsonServer.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      if (error.response) {
        const status = error.response.status;
        console.log("le serveur répond avec l'erruer : ", error);
        if (status === 401 || status === 403) {
          sessionStorage.removeItem("token");
          navigate("/login");
        }
      } else if (error.request) {
        console.log("Le serveur ne répond pas !");
      }
      console.log("error a logguer -> ", error);
      // save({ content: String(error) });
      save(JSON.stringify(error));

      // Do something with request error
      return Promise.reject(error);
    }
  );

  // METHODE 2 :

  // const token = sessionStorage.getItem("token");
  // console.log("token", token);

  // if (token)
  //   // Avec cette méthode, je peux aussi récupérer mon instance dans un autre hook
  //   // puis rajouter le token
  //   jsonServer.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

  return { jsonServer };
};
