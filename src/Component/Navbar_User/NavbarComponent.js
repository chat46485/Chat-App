import './navbar_styles.css'
import React from 'react';
const custom_style_logo = { fontWeight: "900", marginLeft: "50px" };
function NavbarComponent(props) {
    return (
        <div className="Navbar">
            <div className="Navbar_inner_divider_first">
                <p id="Navbar_home" style={custom_style_logo}>Newton Messenger</p>
                <p className="Navbar_Content" id="Navbar_name"> Logged in as <span> {props.UserName}</span></p>
            </div>
        </div>
    )
}

export default NavbarComponent;
