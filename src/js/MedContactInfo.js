import React from "react";
import '../css/MedContactInfo.css'


class MedContactInfo extends React.Component {
    render() {
        return (
            <div className="med-contactinfo">
                <div className="container">
                    <div className="container_wraper footer_map">
                        <div className="contact_detail">Contact details</div>
                        <div className="address_area">
                            <div className="co_name_small">MEDHANSH COMPANIES</div>
                            <div className="add_box">
                                <ul>
                                    <li className="contact">
                                        Address: House No./3, Prem Nagar, Near By Post-office, Bareilly - 243005, Uttar Pradesh, India
                                    </li>
                                    <li className="contact">
                                        Phone: <span>08045478108</span>
                                    </li>
                                </ul>
                                <div className="clear"></div>
                            </div>
                            <div className="extra_cont">
                                <ul>
                                    <li className="contact">
                                        <span>Mr. Manoj Sharma ( Owner )</span>
                                    </li>
                                    <li className="contact">
                                        Mobile: <span itemProp="telephone">08045478108</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MedContactInfo;