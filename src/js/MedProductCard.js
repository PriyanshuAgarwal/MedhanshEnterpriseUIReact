import React from "react";

import '../css/MedProductDetails.css';
import '../css/MedProductCard.css';
import { Link } from "react-router-dom";

class MedProductCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="med-productcard">
                <div className="container ">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-10">
                            <div className="row p-2 bg-white border rounded">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={this.props.product.img}></img></div>
                                <div className="col-md-6 mt-1">
                                    <Link className="nav-link" to={"/product/" + this.props.product.id}><h5>{this.props.product.title}</h5></Link>
                                   <div className="d-flex flex-row price-section">
                                       <div className="price mr-2">Price: {this.props.product.price}</div>
                                   </div>

                                   <div className="custom-field-section">
                                       <ul>
                                            <li><strong><font><font>Delivery Time:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.delivery_time}</strong></strong></font></font></li>
                                            {
                                            this.props.product.source_capacity ? 
                                                <li><strong><font><font>Source Capacity:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.source_capacity}</strong></strong></font></font></li> : ""
                                            }
                                            {
                                            this.props.product.supply_ability ? 
                                                <li><strong><font><font>Supply Ability:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.supply_ability}</strong></strong></font></font></li> : ""
                                            } 
                                            {
                                            this.props.product.processing ? 
                                                <li><strong><font><font>Processing:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.processing}</strong></strong></font></font></li> : ""
                                            }
                                            {
                                            this.props.product.size ? 
                                                <li><strong><font><font>Size:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.size}</strong></strong></font></font></li> : ""
                                            } 
                                            {
                                            this.props.product.material ? 
                                                <li><strong><font><font>Material:</font></font></strong><font><font> &nbsp; <strong><strong>{this.props.product.material}</strong></strong></font></font></li> : ""
                                            }
                                            
                                       </ul>
                                   </div>
                          
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left">
                                    <div className="d-flex flex-column submit-btn-container">
                                        <Link to="/contact-us" className="btn btn-sm submit-btn">Submit Inquiry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MedProductCard;