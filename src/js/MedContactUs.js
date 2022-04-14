import React from "react";
import Header from './Header';
import MedImageCarouselHome from './MedImageCarouselHome';
import '../css/MedContactUs.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import MedFooter from './MedFooter';
import MedContactInfo from './MedContactInfo';
import emailjs from '@emailjs/browser';




class MedContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            email: "",
            phone: ""
        }

        this.sendEmail = this.sendEmail.bind(this);
        this.setEmailValue = this.setEmailValue.bind(this);
        this.changeMessage = this.changeMessage.bind(this);


    }

    changeMessage(e) {
        this.setState({message: e.target.value});
    }

    setEmailValue (e) {
        this.setState({email: e.target.value});
    }

    sendEmail()  {
        let {message, email, phone} = this.state;

        var templateParams = {
            message,
            email, 
            phone
        };
       emailjs.send('service_o8aw74u', 'template_5yw29lp', templateParams, 'ZtsT-y7tztdqF_-no')
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
          }, (error) => {
              console.log('FAILED...', error);
          });
      };

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
                                <textarea name="message" id="message" spellCheck="false" value={this.state.message} onChange={this.changeMessage} data-gramm="false"></textarea>
                            </dd>
                            <div className="med-contact-us-details">
                               <dd className="mr-2">
                                    <label><font ><font >Email </font></font><span><font ><font >*</font></font></span></label>
                                    <input placeholder="Enter your email" type="email" id="email" name="email" className="validate[required,custom[email]] valid"  value={this.state.email} onChange={this.setEmailValue}></input>
                                </dd>  
                                <dd className="med-mobile-details">
                                    <label><font ><font >Mobile No </font></font><span><font ><font >*</font></font></span></label>                                 
                                   <PhoneInput
                                        country={'in'}
                                        value={this.state.phone}
                                        onChange={phone => this.setState({ phone })}
                             
                                        />
                                </dd>
                            </div>
                            <dd className="dd-100 center submit-btn-container">
                                <font><font>
                                    <input value="Send Inquiry" className="btn yellow-btn" onClick={this.sendEmail} type="submit"></input>
                                </font></font>
                            </dd>
                            <div className="bulk-mssg-container">
                                <strong><font><font>“We are dealing in bulk order quantity”</font></font><br></br></strong></div>
                        </div>
                        </div>
                </div>
                <MedContactInfo></MedContactInfo>
                <MedFooter></MedFooter>
            </div>

        
        )
      }

}

export default MedContactUs;