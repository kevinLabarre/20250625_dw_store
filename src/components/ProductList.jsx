import { ProductCard } from "./ProductCard";
import { SkeletonProductCard } from "./SkeletonProductCard";

export const ProductList = ({ products, loading }) => {
  const array = Array.from({ length: 8 });

  return (
    <section>
      <div className="grid w-full grid-cols-4 gap-2">
        {!loading
          ? products.map((p) => <ProductCard product={p} key={p.id} />)
          : array.map((_, index) => <SkeletonProductCard key={index} />)}
      </div>
    </section>
  );
};
