import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Landing />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />




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