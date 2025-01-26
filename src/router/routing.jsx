import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import OrganisationRegister from "../pages/organisation/OrganisationRegister";
import Register from "../pages/Register";
import Feed from "../pages/User/Feed";
import Root from "../Root";
function Routing() {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route index element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="Dashboard" element={<Dashboard />} >
                    <Route index element={<Feed />} />
                </Route>
                <Route path="orgregister" element={<OrganisationRegister />} />
            </Route>
        </Routes>
    );
}

export default Routing