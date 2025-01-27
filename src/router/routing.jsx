import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import OrganisationRegister from "../pages/organisation/OrganisationRegister";
import Register from "../pages/Register";
import EventPreview from "../pages/User/EventPreview";
import Feed from "../pages/User/Feed";
import Root from "../Root";
import ProtectedRoute from "./Protected";
function Routing() {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route index element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="orgregister" element={<OrganisationRegister />} />

                <Route path="Dashboard" element={<Dashboard />} >
                    <Route index element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    } />
                    <Route path="event/:id" element={<EventPreview />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default Routing