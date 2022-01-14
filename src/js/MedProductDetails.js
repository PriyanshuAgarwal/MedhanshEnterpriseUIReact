import React from "react";

import "./data";
import '../css/App.css';
import { getProduct, getGranulesProducts } from "./data";
import Header from "./Header";
import MedMenubar from "./MedMenubar";
import MedProductCard from "./MedProductCard";
import '../css/MedProductDetails.css';

class MedProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productId: "",
            currentProduct: {},
            granulesProducts: []
        }

        this.fetchGranulesProducts = this.fetchGranulesProducts.bind(this);
    }

    componentDidMount() {
        let products = getProduct();
        let pathName = window.location.pathname;
        let productId = pathName.split("/")[2];
        let currentProductabc = products.find((product) => {
            return product.id = productId;
        })
        if (currentProductabc.id == "plastic-granules") {
            this.fetchGranulesProducts();
        }
        this.setState({ currentProduct: currentProductabc });
    }

    fetchGranulesProducts() {
        let granulesProducts = getGranulesProducts();
        this.setState({granulesProducts: granulesProducts});
    }

    render() {
        let { currentProduct } = this.state;

        return (
            <div className="">
                <Header></Header>
                <MedMenubar></MedMenubar>
                <div className="med-productdetails container">
                <div className="prodcut-details-container">
                    <div><h4>{currentProduct && currentProduct.title ? currentProduct.title : ""}</h4></div>

                    <div className="product-info">
                        {currentProduct && currentProduct.product_info ? currentProduct.product_info : ""}
                    </div>
                </div>
                <div className="med-productcards">
                    <MedProductCard></MedProductCard>
                </div>
                </div>
            </div>
        )
    }
}

export default MedProductDetails;