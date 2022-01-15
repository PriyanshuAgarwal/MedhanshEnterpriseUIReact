import React from "react";

import Header from "./Header";
import MedMenubar from "./MedMenubar";
import MedProductCard from "./MedProductCard";
import MedContactInfo from "./MedContactInfo";
import MedFooter from './MedFooter';
import '../css/MedProductInfo.css';

class MedProductInfo extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MedMenubar></MedMenubar>
                <div className="container med-indiproductinfo">
                    <div className="product-info-section-main">
                        <div className="product-info-section clearfix">
                            <div className="product-heading">
                                <h1>dark black honey</h1>
                            </div>
                            <div className="product-details">
                                <div className="main-image-section">
                                    <img src="https://cpimg.tistatic.com/06938220/b/4/Dark-Black-Honey.jpg" alt="dark black honey" border="0"></img>
                                </div>
                                <div className="product-info-details">
                                    <div className="product-details-heading">
                                        <h3>Product Details:</h3>
                                     </div>   
                                     <div className="">
                                        <ul>
                                            <li>
                                                <span>Source Capacity:</span>
                                                <span style={{"marginLeft": "60px"}}>10 kilograms per day</span>
                                            </li>

                                            <li>
                                                <div className="share-your-product">
                                                    <i>Share your product:</i>
                                                    <div id="socialShare" className="jssocials"><div className="jssocials-shares"><div className="jssocials-share jssocials-share-facebook"><a href="#" className="jssocials-share-link"><img src="https://tiimg.tistatic.com/new_website1/ti-design/catalog/images/fb.png" className="jssocials-share-logo"></img></a><div className="jssocials-share-count-box jssocials-share-no-count"><span className="jssocials-share-count"></span></div></div><div className="jssocials-share jssocials-share-twitter"><a href="#" className="jssocials-share-link"><img src="https://tiimg.tistatic.com/new_website1/ti-design/catalog/images/twitter.png" className="jssocials-share-logo"></img></a><div className="jssocials-share-count-box jssocials-share-no-count"><span className="jssocials-share-count"></span></div></div><div className="jssocials-share jssocials-share-linkedin"><a href="#" className="jssocials-share-link"><img src="https://tiimg.tistatic.com/new_website1/ti-design/catalog/images/linkedin.png" className="jssocials-share-logo"></img></a><div className="jssocials-share-count-box jssocials-share-no-count"><span className="jssocials-share-count"></span></div></div><div className="jssocials-share jssocials-share-whatsapp"><a target="_blank" href="whatsapp://send?text=www.medhanshenterprises.com%2Fdark-black-honey-6938220.html MEDHANSH%20ENTERPRISES%2C%20We%20are%20prominent%20Manufacturer%2CSupplier%20and%20Exporter%20of%20Dark%20Black%20Honey%20based%20in%20Bareilly%2C%20Uttar%20Pradesh%2C%20India." className="jssocials-share-link"><img src="https://tiimg.tistatic.com/new_website1/ti-design/catalog/images/whatsapp1.png" className="jssocials-share-logo"></img></a><div className="jssocials-share-count-box jssocials-share-no-count"><span className="jssocials-share-count"></span></div></div></div></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-price-section">
                                        <div className="product-price">
                                            <span>350 INR <i>/Kilograms</i></span>

                                        </div>
                                        <div className="get-price-btn">
                                            <a href="javascript:void(0);" className="requirement">Get a price/quote</a>
                                        </div>
                                    </div>

                                    <div className="product-detail-btn-section">
                                        <a id="pp_inq_form" className="btn btn-primary" href="#inq_pp">Submit Inquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-sub-details">
                        <div className="med-product-description">
                            <h2>
                                <font>Price & Qunatity</font>
                            </h2>
                            <ul className="clearfix">
                                <li>
                                    <label>Price</label>
                                    <span>350 INR/Kilograms</span>
                                </li>

                                <li>
                                    <label>Minimum order quantity</label>
                                    <span>10 kilograms</span>
                                </li>
                            </ul>
                        </div>
                        <div className="med-product-description">
                            <h2>
                                <font>Commercial information</font>
                            </h2>
                            <ul className="clearfix">
                                <li>
                                    <label>Source capacity</label>
                                    <span>10 kilograms per day</span>
                                </li>

                                <li>
                                    <label>Delivery Time</label>
                                    <span>1 week</span>
                                </li>
                            </ul>
                        </div>

                        <div className="med-product-description">
                            <h2>
                                <font>Product description</font>
                            </h2>
                            <p style={{"textAlign": "justify", "marginBottom": "0.35cm", "color": "#000"}}>Dark black honey has a different taste to ordinary honey. Some people think that all honey is in the same but the facts are not like that. The honey described above is honey made by bees. It should not be confused with another product on the market called black honey, which is not made by bees. Color is one of the ways natural honey is graded. Dark black honey is made for use in various cuisines and dishes. </p>
                        </div>
                    </div>
                </div>
                <MedContactInfo></MedContactInfo>
                <MedFooter></MedFooter>
            </div>


        )
    }
}

export default MedProductInfo;