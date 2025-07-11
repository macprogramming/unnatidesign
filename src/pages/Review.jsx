import React from "react";

const Review = () => {
    return(
        <>
            <div className="row px-md-5" id="Styles">
                <div className="col-12 text-center">
                    <h3 className="m-0 playfair-display fw-bold">Grow Your Aari Business</h3>
                    <small className="popins">Equisite embroidery pieces crafted by skilled artisans</small>
                </div>
            </div>
            <div className="row">
                <div className="col-6 px-5">
                    <h5 className="text-danger fw-bold">Monetization Strategies</h5>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                    </ol>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header bg-transparent border-0 fw-bold h5">
                                E-commerce Setup
                            </div>
                            <ol className="list-group list-group-unstyled mb-4">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Platform Selection</div>
                                    Shopify,Instagram shop, Etsy, Meeshop
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Marketing Strategy</div>
                                    Reels, testimonials, influencer, collabs
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Payment & Shipping</div>
                                    Razorpay, Shiprocket, Cash on Delivery
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Target Audience</div>
                                    Women 18-50, brides, boutique owners
                                    </div>
                                </li>
                            </ol>
                            <div className="card">
                                <div className="card-body bg_custom_creamy">
                                    <h6>Future Expansian Plans</h6>
                                    <ul>
                                        <li>Mobile app for course access & shopping</li>
                                        <li>Internatinal shipping for global customers</li>
                                        <li>Offline workshops in major cities</li>
                                        <li>Collabarations with designers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;