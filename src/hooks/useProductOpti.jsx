import { useAxios } from "./useAxios";
import { useInstanceAxios } from "./useInstanceAxios";

export const useProductOpti = () => {
  const endpoint = "/products";

  const { loading, error, handleRequest } = useAxios();
  const { jsonServer: api } = useInstanceAxios();

  const getProducts = () => handleRequest(api.get, endpoint);

  const getById = (id) => handleRequest(api.get, `${endpoint}/${id}`);

  const update = (id, product) =>
    handleRequest(api.put, `${endpoint}/${id}`, product);

  return { loading, error, getProducts, getById, update };
};
