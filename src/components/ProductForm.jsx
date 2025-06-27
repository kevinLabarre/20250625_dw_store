import { useEffect } from "react";
// import { useProduct } from "../hooks/useProduct";
import { useForm } from "react-hook-form";
import { useProductOpti } from "../hooks/useProductOpti";

export const ProductForm = ({ product, updateProductsTable }) => {
  useEffect(() => {
    // setValue("title", "Titre pré-rempli");
    reset(product); // reset + remplissage avec les données de 'product'
  }, [product]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // const { update } = useProduct();
  const { update } = useProductOpti();

  const submit = (productUpdate) => {
    update(product.id, productUpdate).then((resp) => {
      updateProductsTable((prev) =>
        prev.map((productMap) =>
          productMap.id === resp.id ? resp : productMap
        )
      );
      document.getElementById("my_modal").close();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="Titre" {...register("title")} />
        <input placeholder="prix" {...register("price")} />
        <input placeholder="slug" {...register("slug")} />
        <input placeholder="category" {...register("category")} />
        <input placeholder="description" {...register("description")} />
        <button className="btn" type="submit">
          Mettre à jour
        </button>
      </form>
    </>
  );
};
