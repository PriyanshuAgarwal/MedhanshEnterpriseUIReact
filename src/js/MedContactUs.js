import React from "react";
import Header from './Header';
import MedImageCarouselHome from './MedImageCarouselHome';
import '../css/MedContactUs.css';




class MedContactUs extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MedImageCarouselHome></MedImageCarouselHome>
                <div className="med-contact-us container">
                    <div className="header">
                        <span className="f2b" style={{marginBottom: "90px !important"}}><font><font >MEDHANSH COMPANIES</font></font></span>
                    </div>
                    <div className="contact-form-container">
                        <div className="contact-form">
                            <dd className="wd-100">
                                <label>
                                    <font>Describe your requirement WHAT TO BUY </font>
                                    <span className="red-color"><font><font>*</font></font></span>
                                </label>
                                <p>
                                    <span className="red-color"><font><font>*</font></font></span>
                                    <font>
                                        <font>Tips on getting accurate quotes. </font>
                                        <font>Please include product name, order quantity, usage, special requests if any in your inquiry.</font>
                                    </font>
                                </p>
                                <textarea name="message" id="message" spellcheck="false" data-gramm="false"></textarea>
                            </dd>
                            <dd className="mr-2">
                                <label><font ><font >Email </font></font><span><font ><font >*</font></font></span></label>
                                <input placeholder="Enter your email" type="email" name="email" class="validate[required,custom[email]] valid" id="email" value=""></input>
                             </dd>
                             <dd id="mobile-dd">
                                <label><font><font>Mobile no. </font></font><span><font><font>*</font></font></span></label>
                                <input id="phone" type="tel" name="phone"></input>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>

        
        )
      }

}

export default MedContactUs;