import React from "react";

import Header from "./Header";
import MedMenubar from "./MedMenubar";
import MedProductCard from "./MedProductCard";
import MedContactInfo from "./MedContactInfo";
import MedFooter from './MedFooter';

class MedProductInfo extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MedMenubar></MedMenubar>
                <MedContactInfo></MedContactInfo>
                <MedFooter></MedFooter>
            </div>


        )
    }
}

export default MedProductInfo;