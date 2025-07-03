import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/unnati_logo-removebg-preview_1.png'
const Header = () => {
    return (
        <>
            <header className="sticky-top bg-header shadow-sm">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent my-0 py-0">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to='/'>
                            <img src={logo} className="img img-fluid" />
                        </Link>
                        <div className="collapse navbar-collapse my-4" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-md-5">
                                <li className="nav-item px-md-3">
                                    <Link className="nav-link active" target="#home" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item px-md-3">
                                    {/* <Link className="nav-link active" href="#about" aria-current="page">About</Link> */}
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item px-md-3">
                                    <Link className="nav-link active" aria-current="page" to='/aariclass'>Aari Class</Link>
                                </li>
                                <li className="nav-item px-md-3">
                                    <Link className="nav-link active" aria-current="page" to='/ourwork'>Our Work</Link>
                                </li>
                                <li className="nav-item px-md-3">
                                    <Link className="nav-link active" aria-current="page" to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;