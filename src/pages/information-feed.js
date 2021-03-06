import * as React from "react";
import { Link } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import './information.css';
import logo from "./../images/skynet.png";
import bus from "./../images/airport_shuttle_24px_outlined.png";
import cloud from "./../images/cloud_24px_outlined.png";
import flight from "./../images/flight_land_24px_outlined.png";
import bell from "./../images/notification_important_24px_outlined.png";
// import phone from "./../images/phone_in_talk_24px_outlined.png";
import triangleWarning from "./../images/warning_amber_24px_outlined.png";

export default function InformationFeed() {
    return (
        <div id='mainBar'>
            <h1 id='header'>Information Feed</h1>
            <div id='feedContainer'>
                <div className='feedItem'>
                        <div><img></img></div>
                        <div></div>
                </div>
            </div>
            <Link to="/">HOME</Link>
        </div>
    )
}