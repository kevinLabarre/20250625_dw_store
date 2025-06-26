import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useEffect, useState } from "react";
import { SkeletonProductCard } from "../components/SkeletonProductCard";

export const ProductDetail = () => {
  const navigate = useNavigate();

  const params = useParams(); // Renvoie un objet contenant l'ensemble des paramètre de l'URL
  const productId = params.id;

  const convertId = Number(productId);

  const { getById, error } = useProduct();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (isNaN(convertId)) {
      navigate("/products");
    } else getById(productId).then((resp) => setProduct(resp));
  }, [convertId]);

  return (
    <>
      <h1>Détails du produit</h1>
      {error && <p>{error.message}</p>}
      {product && !error ? <p>{product.title}</p> : <SkeletonProductCard />}
    </>
  );
};
