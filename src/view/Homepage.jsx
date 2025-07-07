import { useEffect, useState } from "react";
import { useProductOpti } from "../hooks/useProductOpti";
import { ProductList } from "../components/ProductList";
import { usePrivateKey } from "../hooks/usePrivateKey";

export const Homepage = () => {
  const { loading, getProducts, error } = useProductOpti();

  const [products, setProducts] = useState([]);

  const url = import.meta.env.VITE_JSON_SERVER_URL;
  const env = import.meta.env.VITE_ENVIRONMENT;

  const privateKey = usePrivateKey();

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
    console.log(getProducts());
  }, []);

  return (
    <>
      <h1>Bienvenue !</h1>

      <h2>Variable d'environnement: </h2>
      <p>url : {url}</p>
      <p>env: {env}</p>
      <p>private key: {privateKey}</p>
      <p></p>
      {error ? (
        <p>Erreur de chargement des données : {error.message}</p>
      ) : (
        <ProductList products={products} loading={loading} />
      )}
    </>
  );
};
