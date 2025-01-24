import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Login from "../pages/Login";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Login />}>



    </Route>


), {
    future: {
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_fetcherPersist: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,

    },
});

export default router;