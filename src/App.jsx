import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Products } from "./view/Products";
import { ProductDetail } from "./view/ProductDetail";
import { CounterRedux } from "./view/CounterRedux";
import { Cart } from "./view/Cart";
import { Homepage } from "./components/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <ProductDetail /> }, // Idéalement, si possible, utiliser un 'slug'
        { path: "/compteur-redux", element: <CounterRedux /> },
        { path: "/panier", element: <Cart /> },
        { path: "*", element: <>Page: 404 NOT FOUND </> },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <Navbar />
        <Outlet />
        {/* outlet sera 'remplacé' par le composant associé à la route enfant */}
      </>
    );
  }

  function ErrorElement() {
    return <div>Oops ! Quelque chose s'est mal passé !</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
