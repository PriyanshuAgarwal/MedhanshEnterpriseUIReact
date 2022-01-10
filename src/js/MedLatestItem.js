import React from "react";


class MedLatestItem extends React.Component {
    render() {
        return (
            <div>
                <section className="item content">
                    <div className="container">
                        <div className="underlined-title">
                            <div className="editContent">
                                <h1 className="text-center latestitems">LATEST ITEMS</h1>
                            </div>
                            <div className="wow-hr type_short">
                                <span className="wow-hr-h">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="productbox">
                                    <div className="fadeshop">
                                        <div className="captionshop text-center" style={{display: "none"}}>
                                            <h3>Bopp Printed Self Adhesive Tape</h3>
                                            <p>
                                                Highly usedin cosmetic, pharmaceutical and food industry.
                                            </p>
                                            <p>
                                                {/* <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a> */}
                                                <a href="#" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                                            </p>
                                        </div>
                                        <span className="maxproduct"><img src="images/Bopp-Printed-Self-Adhesive-Tape.jpg"
                                            alt=""></img></span>
                                    </div>
                                    <div className="product-details">
                                        <a href="#">
                                            <h1>Bopp Printed Self Adhesive Tape</h1>
                                        </a>
                                        <span className="price">
                                            <span className="edd_price">1800 INR/box</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.productbox -->  */}
                            <div className="col-md-4">
                                <div className="productbox">
                                    <div className="fadeshop">
                                        <div className="captionshop text-center" style={{display: "none"}}>
                                            <h3>Dark Black Honey</h3>
                                            <p>
                                                Dark Black Honey is made for use in the various cuisines and dishes.
                                            </p>
                                            <p>
                                                {/* <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a> --> */}
                                                <a href="#" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                                            </p>
                                        </div>
                                        <span className="maxproduct"><img src="images/Dark-Black-Honey.jpg" alt=""></img></span>
                                    </div>
                                    <div className="product-details">
                                        <a href="#">
                                            <h1>Dark Black Honey</h1>
                                        </a>
                                        <span className="price">
                                            <span className="edd_price">350 INR/Kilograms
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- /.productbox -->  */}
                            <div className="col-md-4">
                                <div className="productbox">
                                    <div className="fadeshop">
                                        <div className="captionshop text-center" style={{display: "none"}}>
                                            <h3>BOPP Printed Adhesive Tape</h3>
                                            <p>
                                                Extensively used in electrical, pharmaceutical, glass and food processing industries for sealing of cartons.
                                            </p>
                                            <p>
                                                { /*<a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a> */}
                                                <a href="#" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                                            </p>
                                        </div>
                                        <span className="maxproduct"><img src="images/Industrial-BOPP-Printed-Adhesive-Tape.jpg"
                                            alt=""></img></span>
                                    </div>
                                    <div className="product-details">
                                        <a href="#">
                                            <h1>BOPP Printed Adhesive Tape</h1>
                                        </a>
                                        <span className="price">
                                            <span className="edd_price">1800 INR/Box
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        )
    }
}




export default MedLatestItem;