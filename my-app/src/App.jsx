import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "./components/layout";

import Home from "./components/home";
import Products from "./components/products";
import AboutMe from "./components/aboutme";
import Login from "./components/login";
import Register from "./components/register";
import ProductPage from "./components/productPage";
import { ErrorPage } from "./components/errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:id",
                element: <ProductPage />
            },
            {
                path: "aboutme",
                element: <AboutMe />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }

        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App;