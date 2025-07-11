import React from "react";
import img from '../assets/home_banner_01.avif'
import Colors from "./Colors";
import Courses from "./Courses";
import Feature from "./Feature";
import HandcraftedProducts from "./HandcraftedProducts";

const Homeproducts = () => {
    return(
        <>
            <div className="row px-md-5" id="Styles">
                <div className="col-12 text-center">
                    <h3 className="m-0 playfair-display">Signature Aari Work Styles</h3>
                    <small className="popins">Explore the divers range of embroidery style that make Aari work unique and vwesatile</small>
                </div>
            </div>
            <div className="row row-cols-1 px-md-5 row-cols-sm-2 row-cols-md-4 my-5">
                <div className="col mh-100">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title popins">Zardosi Work</h5>
                            <p className="card-text popins">Metallic thread embroidery creating royal, opulent designs perfect for bridal wear.</p>
                            
                        </div>
                        <div className="card-footer border-0 bg-transparent">
                            <div className="d-flex gap-1">
                                <span class="badge rounded-pill bg_custom_secondary">Bridal</span>
                                <span class="badge rounded-pill bg_custom_secondary">Metallic</span>
                                <span class="badge rounded-pill bg_custom_secondary">Festive</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mirror Work</h5>
                            <p className="card-text">Embedded mirrors with interact Aari stitching creating light-catching folk designs.</p>
                        </div>
                        <div className="card-footer border-0 bg-transparent">
                            <div className="d-flex gap-1">
                                <span class="badge rounded-pill bg_custom_secondary">Traditional</span>
                                <span class="badge rounded-pill bg_custom_secondary">Vibrant</span>
                                <span class="badge rounded-pill bg_custom_secondary">Rajastani</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bead & Stone Work</h5>
                            <p className="card-text">Glamorous bead and stone embellishments combining Traditional motifs with modern aestetics.</p>
                        </div>
                        <div className="card-footer border-0 bg-transparent">
                            <div className="d-flex gap-1">
                                <span class="badge rounded-pill bg_custom_secondary">Designer</span>
                                <span class="badge rounded-pill bg_custom_secondary">Luxury</span>
                                <span class="badge rounded-pill bg_custom_secondary">Contemporary</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Thread Embrodidery</h5>
                            <p className="card-text">Subtle yet elegant thread work perfect for daily wear kurtas and lightweight fabrics.</p>
                        </div>
                        <div className="card-footer border-0 bg-transparent">
                            <div className="d-flex gap-1">
                                <span class="badge rounded-pill bg_custom_secondary">Casual</span>
                                <span class="badge rounded-pill bg_custom_secondary">Minimal</span>
                                <span class="badge rounded-pill bg_custom_secondary">Versatile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Colors />
            <Courses />
            <Feature />
            <HandcraftedProducts />
        </>
    )
}

export default Homeproducts;