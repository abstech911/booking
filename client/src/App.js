import {useLocation, useRoutes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import React from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const App = () => {

    const router = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/hotels", element: <List/>},
        {path: "/hotel", element: <Hotel/>}
    ])
    const location = useLocation();

    if (!router) return null;
    return (
        <main>

            <AnimatePresence mode='wait'>
                {React.cloneElement(router, {key: location.pathname})}
            </AnimatePresence>
        </main>
    );
}

export default App;


