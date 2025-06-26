import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";

export const Cart = () => {
  const products = useSelector((state) => state.cart.value);

  return (
    <>
      <h1>Panier</h1>
      <p>
        Attention, un 'store' comme Redux, n'est pas précu pour stocker des
        données
      </p>
      <p>
        Les stores sont des gestionnaires d'état.
        <strong>
          Si je rachraichis la page, je perds toutes les données du store, et on
          repasse sur les valeurs initiales
        </strong>
      </p>
      <p>
        Pour ce genre de logic avec un panier, il faudrait utiliser une
        fonctionnalité côté back, pour enregistrer les produits en BDD
      </p>
      {products.length > 0 && <ProductList products={products} />}
    </>
  );
};
