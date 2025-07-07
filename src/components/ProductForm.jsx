import { useEffect } from "react";
// import { useProduct } from "../hooks/useProduct";
import { useForm } from "react-hook-form";
import { useProductOpti } from "../hooks/useProductOpti";
import "../style/FormAccessiblity.css";

export const ProductForm = ({ product, updateProductsTable }) => {
  useEffect(() => {
    // setValue("title", "Titre pré-rempli");
    reset(product); // reset + remplissage avec les données de 'product'
  }, [product]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
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
      <form className="form-group" onSubmit={handleSubmit(submit)}>
        <label htmlFor="title">Titre</label>
        <input
          id="Titre"
          placeholder="Titre"
          {...register("title", { required: "Titre obligatoire" })}
          aria-describedby="erreur-titre"
          className="form-control"
        />
        <span className="error-message" aria-live="polite" id="erreur-titre">
          {errors.title && <>{errors.title.message}</>}
        </span>

        <label htmlFor="Prix">Prix</label>
        <input
          id="Prix"
          placeholder="prix"
          {...register("price")}
          className="form-control"
        />

        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          placeholder="slug"
          {...register("slug")}
          className="form-control"
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          placeholder="category"
          {...register("category")}
          className="form-control"
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          placeholder="description"
          {...register("description")}
          className="form-control"
        />
        <div className="w-fit m-auto">
          <button
            aria-label="Mettre à jour le produit"
            className="btn myButton"
            type="submit"
          >
            Mettre à jour
          </button>
        </div>
      </form>
    </>
  );
};
