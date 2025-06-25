import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const { getPaginate, setPage, setPerPage, perPage, page, loading } =
    useProduct();

  const [products, setProducts] = useState([]);

  const [responseApiObject, setResponseApiObject] = useState({
    pages: 0,
    items: 0,
  });

  useEffect(() => {
    getPaginate().then((resp) => {
      setProducts(resp.data);
      setResponseApiObject({ pages: resp.pages, items: resp.items });
    });
  }, [page, perPage]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
  };

  return (
    <>
      <h1>Mes produits</h1>
      <ProductList products={products} loading={loading} />
      <div className="w-fit m-auto p-5">
        <Pagination
          nbrButton={responseApiObject.pages}
          handleClick={clickOnPaginationButton}
        />
      </div>
    </>
  );
};
