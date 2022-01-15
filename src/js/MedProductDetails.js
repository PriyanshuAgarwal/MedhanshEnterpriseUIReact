import React from "react";

import "./data";
import '../css/App.css';
import { getProduct, getGranulesProducts } from "./data";
import Header from "./Header";
import MedMenubar from "./MedMenubar";
import MedProductCard from "./MedProductCard";
import '../css/MedProductDetails.css';
import { useHistory } from 'react-router-dom';
import { browserHistory } from 'react-router';

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
        this.setChildProducts = this.setChildProducts.bind(this);
        this.setCurrentProduct = this.setCurrentProduct.bind(this);
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
    }

    setChildProducts(currentProductabc) {
        if (currentProductabc.id == "plastic-granules") {
            this.fetchGranulesProducts();
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
        this.setState({ granulesProducts: granulesProducts });
    }

    render() {
        let { currentProduct, granulesProducts } = this.state;
        console.log(currentProduct);

        let granules = granulesProducts.map((granulesProduct) => {
            return (<MedProductCard
                key={granulesProduct.id}
                title={granulesProduct.title}>
            </MedProductCard>)
        });
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
                        {granules}
                    </div>
                </div>
            </div>
        )
    }
}

export default MedProductDetails;