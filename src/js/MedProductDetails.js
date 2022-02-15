import React from "react";

import "./data";
import '../css/App.css';
import { getProduct, getGranulesProducts, getHoneyProducts, getPlasticRawScrapsProducts, getBoppTransparentTapes } from "./data";
import Header from "./Header";
import MedProductCard from "./MedProductCard";
import MedContactInfo from "./MedContactInfo";
import MedFooter from './MedFooter';
import '../css/MedProductDetails.css';

class MedProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productId: "",
            currentProduct: {},
            childProducts: []
        }

        this.fetchGranulesProducts = this.fetchGranulesProducts.bind(this);
        this.setChildProducts = this.setChildProducts.bind(this);
        this.setCurrentProduct = this.setCurrentProduct.bind(this);
        this.fetchHoneyProducts = this.fetchHoneyProducts.bind(this);
    }

    componentDidMount() {
        let pathName = window.location.pathname;
        let productId = pathName.split("/")[2];
        this.setCurrentProduct(productId);
    }

    setCurrentProduct(productId) {
        let products = getProduct();
        let currentProductabc = products.find((product) => {
            return product.id == productId;
        })

        this.setState({ currentProduct: currentProductabc });
        this.setChildProducts(currentProductabc);
    }

    setChildProducts(currentProduct) {
        if (currentProduct.id == "plastic-granules") {
            this.fetchGranulesProducts();
        } else if (currentProduct.id == "natural-honey") {
            this.fetchHoneyProducts();
        } else if (currentProduct.id == "industrial-plastic-raw-material") { 
            this.fetchPlasticRawScrapsProducts();
        } else if (currentProduct.id == "bopp-transparent-tapes") { 
            this.fetchBoppTransparentTapesProducts();
        }
    }


    componentWillReceiveProps(nextProps) {
        let oldProduct = this.props.location.pathname && this.props.location.pathname.split("/")[2];
        let newProduct = nextProps.location.pathname && nextProps.location.pathname.split("/")[2];
        if (oldProduct !== newProduct) {
            this.setCurrentProduct(newProduct);
        }

    }

    fetchGranulesProducts() {
        let granulesProducts = getGranulesProducts();
        this.setState({ childProducts: granulesProducts });
    }

    fetchHoneyProducts() {
        let granulesProducts = getHoneyProducts();
        this.setState({ childProducts: granulesProducts });
    }

    fetchPlasticRawScrapsProducts() {
        let granulesProducts = getPlasticRawScrapsProducts();
        this.setState({ childProducts: granulesProducts });
    }

    fetchBoppTransparentTapesProducts() {
        let granulesProducts = getBoppTransparentTapes();
        this.setState({ childProducts: granulesProducts });
    }

    render() {
        let { currentProduct, childProducts } = this.state;

        let granules = childProducts.map((childProduct) => {
            return (<MedProductCard
                key={childProduct.id}
                product={childProduct}>
            </MedProductCard>)
        });
        return (
            <div className="">
                <Header></Header>
                <div className="med-productdetails container">
                    <div className="prodcut-details-container">
                        <div><h4>{currentProduct && currentProduct.title ? currentProduct.title : ""}</h4></div>
                        <div className="product-info">
                            {currentProduct && currentProduct.product_info ? currentProduct.product_info : ""}
                        </div>
                    </div>
                    <div className="med-productcards">
                        {granules}
                    </div>
                    <div className="bulk-mssg-container">
                        <strong><font><font>“We are dealing in bulk order quantity”</font></font><br></br></strong>
                    </div>
                </div>
                
                <MedContactInfo></MedContactInfo>
                <MedFooter></MedFooter>
            </div>
        )
    }
}

export default MedProductDetails;