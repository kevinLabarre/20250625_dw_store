import axios from "axios";
import { useState } from "react";

export const useProduct = () => {
  const url = "http://localhost:3001/products";

  const api = axios.create({
    baseURL: url,
  });

  // Pour rajouter un délai lors de l'envoi de nos requêtes
  api.interceptors.request.use(
    (config) =>
      new Promise((resolve) => setTimeout(() => resolve(config), 3000))
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = () => {
    setLoading(true);
    setError(null);

    return api
      .get()
      .then((resp) => resp.data)
      .catch((err) => {
        setError(err);
        throw err; // Pour que les composants puissent récupérer l'erreur dans le 'catch'
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getProducts, loading, error };
};
