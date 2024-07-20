import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){

    return(
        <>
        <Header/>
        {/* wherever we use outlet we can change things  there */}
        {/* it will be use as base, here header and footer will be same but things can be change in between  */}
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout