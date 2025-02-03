import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import EventRegister from "../pages/organisation/EventRegister";
import OrganisationRegister from "../pages/organisation/OrganisationRegister";
import Register from "../pages/Register";
import EventPreview from "../pages/User/EventPreview";
import Root from "../Root";
import ProtectedRoute from "./Protected";
function Routing() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="orgRegister" element={<OrganisationRegister />} />

        <Route path="" element={<Dashboard />}>
          <Route path="dashboard" element={<ProtectedRoute />} />

          {/* user routing */}
          <Route path="event/:id" element={<EventPreview />} />





          {/* organisation routing */}
          <Route path="eventRegistr" element={<EventRegister />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
