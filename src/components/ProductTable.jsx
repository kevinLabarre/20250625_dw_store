import { useState } from "react";
import { Modal } from "./Modal";
import { ProductForm } from "./ProductForm";

export const ProductTable = ({ products, updateProducts }) => {
  const [product, setProduct] = useState(null);

  const openModal = (product) => {
    document.getElementById("my_modal").showModal();
    setProduct(product);
  };

  return (
    <>
      {products.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>titre</th>
                <th>prix</th>
                <th>slug</th>
                <th>category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.price}</td>
                  <td>{p.slug}</td>
                  <td>{p.category}</td>
                  <td>
                    <button
                      onClick={() => openModal(p)}
                      className="btn btn-warning"
                    >
                      Mettre à jour
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            content={
              <ProductForm
                product={product}
                updateProductsTable={updateProducts}
              />
            }
          />
        </div>
      )}
    </>
  );
};
