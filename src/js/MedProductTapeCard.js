import React from "react";

import '../css/MedProductDetails.css';
import '../css/MedProductTapeCard.css';
import { Link } from "react-router-dom";

class MedProductTapeCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { subproducts } = this.props.product;
        let prductlinks = subproducts.map((subproduct, index) => {
            console.log(subproduct);
            return (
                <div className="pro_link_cont" key={index}>
                    <ul><li><Link to={subproduct[0].url}>{subproduct[0].title}</Link></li></ul>
                   {subproduct[1] ? <ul><li><Link to={subproduct[1].url}>{subproduct[1].title}</Link></li></ul> : ""} 
                   {subproduct[2] ? <ul><li><Link to={subproduct[2].url}>{subproduct[2].title}</Link></li></ul> : "" }
                </div>
            )
        })

        return (
            <div className="med-producttapecard">
                <div className="med-producttapecard-container">
                    <div className="prod_cat_name">{this.props.product.title}</div>
                    <div className="prod_cat_descr">
                        {this.props.product.info}
                    </div>
                    {prductlinks}
                </div>
            </div>
        )
    }
}

export default MedProductTapeCard;