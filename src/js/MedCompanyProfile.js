import React from "react";
import Header from './Header';
import '../css/MedCompanyProfile.css';
import MedFooter from "./MedFooter";
import MedContactInfo from "./MedContactInfo";


class MedCompanyProfile extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="company-profile-img">
                    <img src="https://cpimg.tistatic.com/102742/20/template_photo_company-profile.jpg" border="0">
                    </img>
                </div>
                <div className="company-profile-container">
                    <div className="profile-heading">
                        <h5><strong>Company profile</strong></h5>
                    </div>
                    <div className="company-info">
                        Incorporated 2017, we are, Medhansh Enterprises, a company that is extensively renowned for being engaged in delivering world class quality BOPP Glue Printed Tape, BOPP Adhesive Tapes, Bopp Granules, Bopp Colored Tapes, and much more. Bareily in Uttar Pradesh, India , is the city where we have established our facility, and this facility is maintained in a way that helps us to undertake our jobs perfectly.
                        <br></br><br></br>
                        We are well credited, and we are highly capable of fully delivering to our clients. While we forbid to disappoint our clients, we emphasize on servicing attributes that will help us impress our clients in every business deal. We not only impress clients by delivering qualitative products, but also benefitting them in every possible way.
                    </div>
                    <br></br>
                    <br></br>
                    <p className="bold-color-text"><strong><strong>Key facts of Medhansh companies</strong></strong></p>
                    <div className="company-profile-table">
                        <table width="100%" cellSpacing={0} cellPadding={4} align="justify">
                            <tbody>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: '1px medium 1px 1px', borderStyle: 'solid none solid solid', padding: '0.1cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Nature of business</font></font></strong></p>
                                    </td>
                                    <td style={{ border: '1px solid #000000', padding: '0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Manufacturer, supplier, exporter and trader</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Establishment year    </font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2017</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Company branches    </font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>01</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>No. of employees</font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>04</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Ease storage</font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Yes</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Banker</font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>ICICI bank</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Annual turnover</font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>INR 20 Lakhs</font></font></p>
                                    </td>
                                </tr>
                                <tr valign="TOP">
                                    <td style={{ borderWidth: 'medium medium 1px 1px', borderStyle: 'none none solid solid', padding: '0cm 0cm 0.1cm 0.1cm' }} width="50%">
                                        <p className="bold-color-text"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>GST no.</font></font></strong></p>
                                    </td>
                                    <td style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', padding: '0cm 0.1cm 0.1cm' }} width="50%">
                                        <p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>09CPWPS4558A1Z9</font></font></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <MedContactInfo></MedContactInfo>
                <MedFooter></MedFooter>

            </div>
        )
    }
}

export default MedCompanyProfile;