import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductList } from "../components/ProductList";

export const Products = () => {
  const { getProducts, loading } = useProduct();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <>
      <h1>Mes produits</h1>

      {loading ? (
        <p>Chargement en cours ....</p>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};
