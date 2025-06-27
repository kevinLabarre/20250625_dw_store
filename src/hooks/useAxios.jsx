import { useState } from "react";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await requestFunction(...args);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return { loading, error, handleRequest };
};
