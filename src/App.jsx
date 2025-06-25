import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Products } from "./view/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        { path: "", element: <>Page d'accueil</> },
        { path: "/products", element: <Products /> },
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
