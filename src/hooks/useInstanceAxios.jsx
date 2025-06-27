import axios from "axios";

export const useInstanceAxios = () => {
  // Attnetion : les variables d'env. doivent commencer par "VITE"
  const url = import.meta.env.VITE_JSON_SERVER_URL;

  const jsonServer = axios.create({
    baseURL: url,
  });

  // Pour rajouter un délai lors de l'envoi de nos requêtes
  jsonServer.interceptors.request.use(
    (config) =>
      new Promise((resolve) => setTimeout(() => resolve(config), 1000))
  );

  return { jsonServer };
};
