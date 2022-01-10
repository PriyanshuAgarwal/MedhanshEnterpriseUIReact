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
                        <li><a href="http://www.medhanshenterprises.com/products.html" className="hilight"><font ><font>
                            Our products              </font></font></a></li>
                        <li><font ><font >|</font></font></li>
                        <li><a href="/contact-us.html"><font><font>Contact us</font></font></a></li>
                    </ul>
                    <div className="clear"></div></div>
            </div>


        )
    }
}

export default MedFooter;