import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { SelectPagination } from "../components/SelectPagination";

export const Products = () => {
  const { getPaginate, setPage, setPerPage, perPage, page, loading } =
    useProduct();

  const [products, setProducts] = useState([]);

  const [responseApiObject, setResponseApiObject] = useState({
    pages: 0,
    items: 0,
  });

  const [tableSelect, setTableSelect] = useState([]);

  // Premier chargement => la requete se lance
  // Puis, à cahque changement de valeur de page ou perPage ([page, perPage]),
  // on reéxecute le fonction du useEffect, et donc on relance une requete HTTP
  // + on fait appelle 'setProducts' , ce qui permet de mettre à jour la liste de produits
  // affichés sur le navigateur
  useEffect(() => {
    getPaginate().then((resp) => {
      setProducts(resp.data);
      setResponseApiObject({ pages: resp.pages, items: resp.items });
    });
  }, [page, perPage]);

  useEffect(() => {
    if (responseApiObject.items) {
      const array = Array.from(
        { length: responseApiObject.items },
        (_, index) => ({
          value: index + 1,
          label: `Nbr d'éléments: ${index + 1}`,
        })
      );
      setTableSelect(array);
    }
  }, [responseApiObject]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
  };

  const handleSelectChange = (value) => {
    setPerPage(value);
  };

  return (
    <>
      <h1>Mes produits</h1>
      <SelectPagination
        options={tableSelect}
        onChangeFunction={handleSelectChange}
        initialValue={perPage}
      >
        Choisir le nombre d'élements
      </SelectPagination>
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
