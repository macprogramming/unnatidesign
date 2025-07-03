import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Ourservice from "./Ourservice";
import Footer from "./Footer";

const Layout = () => {
    return(
        <>
            <div className="container-fluid px-0" data-bs-spy="scroll" data-bs-target="#navbar-example2" >
                <Home />
                <About />
                <Ourservice />
                <Contact />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout