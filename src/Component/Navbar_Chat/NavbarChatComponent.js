import './navbar_styles.css'
import React from 'react';
const custom_style_logo = { fontWeight: "900", marginLeft: "50px" };
let url = 'https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png';
function NavbarChatComponent(props) {
    return (
        <div className="Navbar_Chat">
            <div className="Navbar_chat_inner_divider_first">
            <img id="img_user" src={url}></img>
                <p id="Navbar_chat_home" style={custom_style_logo}>{props.recieverName}</p>
            </div>
        </div>
    )
}

export default NavbarChatComponent;
