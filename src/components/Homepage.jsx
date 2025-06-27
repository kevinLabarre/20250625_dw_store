import { useEffect, useState } from "react";
import { useProductOpti } from "../hooks/useProductOpti";
import { ProductList } from "./ProductList";

export const Homepage = () => {
  const { loading, getProducts, error } = useProductOpti();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <>
      <h1>Bienvenue !</h1>

      {error ? (
        <p>Erreur de chargement des données : {error.message}</p>
      ) : (
        <ProductList products={products} loading={loading} />
      )}
    </>
  );
};
