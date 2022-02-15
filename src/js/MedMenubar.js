import React from "react";
import { Link } from "react-router-dom";
import '../css/MedMenubar.css';

class MedMenubar extends React.Component {
	render() {
		return (
			<div className="med-menubar">
				<div className="container">
				<nav className="navbar main-nav navbar-expand-lg">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="main_nav">

						<ul className="navbar-nav">
							<li className="nav-item"><Link className="nav-link" to="/">Home Page</Link> </li>
							<li className="nav-item"><Link className="nav-link" to="/company-profile">Company Profile </Link> </li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle"  data-toggle="dropdown"> Our Products </a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/products/plastic-granules">Plastic granules</Link></li>
									<li><Link className="dropdown-item" to="/products/natural-honey">Natural Honey</Link></li>
									<li><a className="dropdown-item"> BOPP Tapes &raquo; </a>
										<ul className="submenu dropdown-menu">
											<li><a className="dropdown-item" href=""> Bopp tapes</a></li>
											<li><a className="dropdown-item" href=""> Bopp Packaging Tape</a></li>
											<li><a className="dropdown-item" href=""> Bopp Printed Tape</a></li>
											<li><Link className="dropdown-item" to="/products/bopp-transparent-tapes"> Transparent Bopp Tapes</Link></li>
										</ul>
									</li>
									<li><Link className="dropdown-item" to="/products/industrial-plastic-raw-material">Plastic waste raw material</Link></li>
								</ul>
							</li>

							<li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
						</ul>
					</div>
				</nav>
				</div>
			</div>

		)
	}
}




export default MedMenubar;