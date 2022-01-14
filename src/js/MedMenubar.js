import React from "react";
import { Link } from "react-router-dom";
import '../css/MedMenubar.css';

class MedMenubar extends React.Component {
    render() {
      return (
        <div className="container med-menubar">
		<nav className="navbar main-nav navbar-expand-lg">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="main_nav">

				<ul className="navbar-nav">
					<li className="nav-item"><Link className="nav-link" to="/">Home Page</Link> </li>
					<li className="nav-item"><Link className="nav-link" to="/company-profile">Company Profile </Link> </li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Our Products </a>
						<ul className="dropdown-menu">
							<li><Link className="dropdown-item" to="/products/plastic-granules">Plastic granules</Link></li>
							<li><a className="dropdown-item" href="#"> Natural Honey </a></li>
							<li><a className="dropdown-item" href="#"> BOPP Tapes &raquo; </a>
							<ul className="submenu dropdown-menu">
									<li><a className="dropdown-item" href=""> Bopp tapes</a></li>
									<li><a className="dropdown-item" href=""> Bopp Packaging Tape</a></li>
									<li><a className="dropdown-item" href=""> Bopp Printed Tape</a></li>
									<li><a className="dropdown-item" href=""> Transparent Bopp Tapes</a></li>
							</ul>
							</li>
							<li><a className="dropdown-item" href="#"> Plastic waste raw material</a></li>
						</ul>
						</li>
					
					<li className="nav-item"> <a className="nav-link" href="#">Contact Us </a> </li>
					{/*<li class="nav-item"> <a class="nav-link" href="#"> First level 2 </a></li> */ }
				</ul>
				
			</div> {/* navbar-collapse. */}
		</nav>
	</div>
        
      )
    }
  }
  
  
  
  
  export default MedMenubar;