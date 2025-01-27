import React from 'react';
import { useLocation } from "react-router-dom";
import Feed from '../pages/User/Feed';
import OrgFeed from '../pages/organisation/OrgFeed';

const ProtectedRoute = ({ children }) => {
    const user = "User";
    let location = useLocation();

    if (user == "User") {
        return <Feed />
    }
    if (user == "Org") {

        return <OrgFeed />


    }

};

export default ProtectedRoute;