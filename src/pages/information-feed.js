import * as React from "react";
import { navigate } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import './information.css';
// import logo from "./../images/skynet.png";
// import bus from "./../images/airport_shuttle_24px_outlined.png";
// import cloud from "./../images/cloud_24px_outlined.png";
// import flight from "./../images/flight_land_24px_outlined.png";
// import bell from "./../images/notification_important_24px_outlined.png";
// import phone from "./../images/phone_in_talk_24px_outlined.png";
// import triangleWarning from "./../images/images_png/warning_amber_24px_outlined.png";
import feed from "./../images/images_png/info.png";

export default function InformationFeed() {
    return (
        <div id='mainBar'>
            <h1 id='header'>Information Feed</h1>
            <img src={feed} width='100%' id='feed' ></img>
            <button id='firstst' onClick={() => navigate('/')}>
                back
                </button>
            {/* <Link to="/">HOME</Link> */}
        </div>
        
    )
}