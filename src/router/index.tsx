import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";
import App from "../App";
// import Catalog from '../components/Catalog';
import About from "../components/About";
// import Sales from '../components/Sales';
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <App />
            },
            //   {
            //     path: '/catalog',
            //     element: <Catalog />,
            //   },
            {
                path: "/about",
                element: <About />
            },
            //   {
            //     path: '/sales',
            //     element: <Sales />,
            //   },
            {
                path: "*",
                element: <Navigate to="/404" replace />
            }
        ]
    },
    {
        path: "/404",
        element: <NotFound />
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
