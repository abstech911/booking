import {useLocation, useRoutes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import React from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";

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
            <Navbar/>
            <Header/>

            <AnimatePresence mode='wait'>
                {React.cloneElement(router, {key: location.pathname})}
            </AnimatePresence>
        </main>
    );
}

export default App;


