import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../redux/slices/cartSlice";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const dispatch = useDispatch();

  return (
    <div className="flex shadow-xl card bg-base-100 w-96">
      <figure>
        <div className="h-40">
          <img src={product.image} alt={product.title} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div className="justify-end card-actions">
          <button onClick={handleShowDetails} className="btn btn-primary">
            Voir
          </button>
          <Link to={`/products/${product.id}`}>Voir avec le Link</Link>
          <button className="btn" onClick={() => dispatch(addProduct(product))}>
            ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};
