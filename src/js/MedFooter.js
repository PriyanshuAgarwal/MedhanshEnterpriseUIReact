import React from "react";
import '../css/MedFooter.css';
import { Link } from "react-router-dom";

class MedFooter extends React.Component {
    render() {
        return (
            <div>
                <div className="footer_strip">
                    <ul>
                        <li><Link to="/"><font><font>Home Page</font></font></Link> </li>
                        <li><font ><font>|</font></font></li>
                        <li><Link to="/company-profile"><font><font>Company profile</font></font></Link> </li>
                        <li><font ><font >|</font></font></li>
                        <li><Link className="hilight" to="/products/plastic-granules"><font><font>Our Products</font></font></Link></li>
                        <li><font ><font >|</font></font></li>
                        <li><Link to="/contact-us"><font><font>Contact us</font></font></Link></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div class="static_send_inq"><Link to="/contact-us">Send Inquiry</Link></div>
            </div>


        )
    }
}

export default MedFooter;