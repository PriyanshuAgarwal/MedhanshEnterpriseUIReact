import React from "react";
import { Link } from "react-router-dom";
import '../css/MedMenubar.css';

class MedMenubar extends React.Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function(){
			// make it as accordion for smaller screens
			if (window.innerWidth < 992) {
			
			  // close all inner dropdowns when parent is closed
			  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
				everydropdown.addEventListener('hidden.bs.dropdown', function () {
				  // after dropdown is hidden, then find all submenus
					this.querySelectorAll('.submenu').forEach(function(everysubmenu){
					  // hide every submenu as well
					  everysubmenu.style.display = 'none';
					});
				})
			  });
			
			  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
				element.addEventListener('click', function (e) {
					let nextEl = this.nextElementSibling;
					if(nextEl && nextEl.classList.contains('submenu')) {	
					  // prevent opening link if link needs to open dropdown
					  e.preventDefault();
					  if(nextEl.style.display == 'block'){
						nextEl.style.display = 'none';
					  } else {
						nextEl.style.display = 'block';
					  }
			
					}
				});
			  })
			}
			// end if innerWidth
			});
	}

	render() {
		return (
			<div className="med-menubar">
				<div className="container">
				<nav className="navbar main-nav navbar-expand-lg">
					<div className="navbar-brand">Menu</div>
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
									
									
									<li><a className="dropdown-item"> BOPP Tapes &raquo; </a>
										<ul className="submenu dropdown-menu">
											<li><Link className="dropdown-item" to="/products/bopp-tapes">Bopp tapes</Link></li>
											<li><Link className="dropdown-item" to="/products/bopp-packing-tapes"> Bopp Packaging Tape</Link></li>
											<li><Link className="dropdown-item" to="/products/bopp-printed-tapes"> Bopp Printed Tape</Link></li>
											<li><Link className="dropdown-item" to="/products/bopp-transparent-tapes"> Transparent Bopp Tapes</Link></li>
										</ul>
									</li>
			                                                <li><Link className="dropdown-item" to="/products/natural-honey">Natural Honey</Link></li>
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
