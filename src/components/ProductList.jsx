import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <section>
      <div className="grid w-full grid-cols-4 gap-2">
        {products.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </section>
  );
};
