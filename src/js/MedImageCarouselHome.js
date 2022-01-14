import React from "react";
import firstSlide from '../images/carousel_1.jpg';
import secondSlide from '../images/carousel_2.jpg';


class MedImageCarouselHome extends React.Component {

	componentDidMount() {
		/* $('.carousel').carousel({
			interval: 1000
		  }) */
	}
	render() {
		return (
			<div className="company-banner">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-70" src={firstSlide} alt="First slide"></img>
						</div>
						<div className="carousel-item">
							<img className="d-block w-70" src={secondSlide} alt="Second slide"></img>
						</div>

						<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>

				</div>
			</div>
		)
	}
}




export default MedImageCarouselHome;