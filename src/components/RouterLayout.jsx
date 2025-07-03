import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "./Layout";

const RouterLayout = () => {
    return(
        <>
            <Header />
            <Layout />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes> */}
            <Footer />
        </>
    )
}

export default RouterLayout;