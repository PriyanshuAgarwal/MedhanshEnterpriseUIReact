import React from "react";
import Header from './Header';
import MedMenubar from './MedMenubar';
import MedImageCarouselHome from './MedImageCarouselHome';
import MedVision from './MedVision';
import MedLatestItem from './MedLatestItem';
import MedAboutUs from './MedAboutUs';
import MedFooter from './MedFooter';

class MedHome extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MedMenubar></MedMenubar>
                <MedImageCarouselHome></MedImageCarouselHome>
                <MedVision></MedVision>
                <MedLatestItem></MedLatestItem>
                <MedAboutUs></MedAboutUs>
                <MedFooter></MedFooter>
            </div>
        )
    }
}

export default MedHome;