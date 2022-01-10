import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <img itemProp="logo" src="https://tiimg.tistatic.com/images/l/2/logo_102742.png"
                                    alt="MEDHANSH ENTERPRISES"></img>
                                <a href="index" className="navbar-brand brand"> Medhash Enterprises </a>
                            </div>
                        </div>
                    </nav>
                    </div>
            </header>
        )
      }

}

export default Header;