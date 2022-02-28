import React from "react";

import Header from "./Header";
import { allProducts } from "./data";
import MedContactInfo from "./MedContactInfo";
import MedFooter from './MedFooter';
import '../css/MedProductInfo.css';

class MedProductInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: "",
            currentProduct: {}
        }

        this.setCurrentProduct = this.setCurrentProduct.bind(this);
    }

    componentDidMount() {
        let pathName = window.location.pathname;
        let productId = pathName.split("/")[2];
        this.setCurrentProduct(productId);
    }

    setCurrentProduct(productId) {
       let products = allProducts();
       let currentProductabc = products.find((product) => {
            return product.id == productId;
        })
        this.setState({ currentProduct: currentProductabc });
    }

    render() {
        let {currentProduct} = this.state;
        let prices =  (currentProduct && currentProduct.price) ? currentProduct.price.split("/"): [];
        return (
            <div>
                <Header></Header>
                <div className="container med-indiproductinfo">
                    <div className="product-info-section-main">
                        <div className="product-info-section clearfix">
                            <div className="product-heading">
                                <h1>{currentProduct.title}</h1>
                            </div>
                            <div className="product-details">
                                <div className="main-image-section">
                                    <img src={currentProduct.img} alt="dark black honey" border="0"></img>
                                </div>
                                <div className="product-info-details">
                                    <div className="product-details-heading">
                                        <h3>Product Details:</h3>
                                     </div>   
                                     <div className="">
                                        <ul>
                                            {
                                                currentProduct.source_capacity ? 
                                                <li>
                                                    <span>Source Capacity:</span>
                                                    <span style={{"marginLeft": "60px"}}>{currentProduct.source_capacity}</span>
                                                </li> : 
                                                <li>
                                                <span>Supply Ability:</span>
                                                <span style={{"marginLeft": "60px"}}>{currentProduct.supply_ability}</span>
                                            </li> 
                                            }
                                            

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
                                            <span>{prices[0]}<i>/{prices[1]}</i></span>

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
                               {currentProduct.price ?  <li>
                                    <label>Price</label>
                                    <span>{currentProduct.price}</span>
                                </li> : ""} 
                                { currentProduct.price_range ?
                                    <li>
                                    <label>Price Range</label>
                                    <span>{currentProduct.price_range}</span>
                                </li> : "" }
                                {currentProduct.min_order_quantity ? 
                                <li>
                                    <label>Minimum order quantity</label>
                                    <span>{currentProduct.min_order_quantity}</span>
                                </li> : "" }
                            </ul>
                        </div>
                        <div className="med-product-description">
                            <h2>
                                <font>Commercial information</font>
                            </h2>
                            <ul className="clearfix">
                            {currentProduct.source_capacity ?  <li>
                                    <label>Source capacity</label>
                                    <span>{currentProduct.source_capacity}</span>
                                </li> : "" }
                                {currentProduct.supply_ability ?  <li>
                                    <label>Supply Ability</label>
                                    <span>{currentProduct.supply_ability}</span>
                                </li> : "" }

                                {currentProduct.delivery_time?  <li>
                                    <label>Delivery Time</label>
                                    <span>{currentProduct.delivery_time}</span>
                                </li> : ""}
                            </ul>
                        </div>

                        <div className="med-product-description">
                            <h2>
                                <font>Product description</font>
                            </h2>
                            <p style={{"textAlign": "justify", "marginBottom": "0.35cm", "color": "#000"}}>{currentProduct.product_description} </p>
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