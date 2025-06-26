import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const ProductForm = () => {
  const product = {
    title: "Mon produit",
    price: 150,
    slug: "mon-produit",
    category: "Mon catégorie",
    description: "Ma description",
  };

  useEffect(() => {
    // setValue("title", "Titre pré-rempli");
    reset(product); // reset + remplissage avec les données de 'product'
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const submit = () => {
    // Pour soummettre le form
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="Titre" {...register("title")} />
        <input placeholder="prix" {...register("price")} />
        <input placeholder="slug" {...register("slug")} />
        <input placeholder="category" {...register("category")} />
        <input placeholder="description" {...register("description")} />
      </form>
    </>
  );
};
