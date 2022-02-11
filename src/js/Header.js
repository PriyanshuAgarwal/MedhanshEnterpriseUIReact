import React from "react";
import '../css/MedHeader.css';
import MedMenubar from "./MedMenubar";


class Header extends React.Component {
    render() {
        return (
            <div className="med-header-container">
                <header className="item header margin-top-0">
                    <div className="wrapper">
                        <nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <img itemProp="logo" src="https://tiimg.tistatic.com/images/l/2/logo_102742.png"
                                        alt="MEDHANSH ENTERPRISES"></img>
                                    <a href="index" className="navbar-brand brand"> Medhash Enterprises </a>
                                    <div className="top_right_cont">
                                        <div className="phone">Call: 08045478108, 09717659851</div>
                                        <div className="head_link"><a href="/contact-us.html"><img src="https://tiimg.tistatic.com/catalogs/template100001/inquiry-icon.png"  style={{"marginRight": "8px"}}></img>Submit Inquiry</a><div className="clear"></div></div>
                                    </div>
                                    <div className="top_trust"><a target="_blank" href="https://www.tradeindia.com/credit_reports/show_ts.html?profile_id=21852800"><img  src="https://tiimg.tistatic.com/new_website1/general/trust_stamp/trust_stamp_logo_big.gif"></img></a></div>
                                </div>
                            </div>
                        </nav>
                        </div>
                </header>
                <MedMenubar></MedMenubar>
            </div>
        )
      }

}

export default Header;