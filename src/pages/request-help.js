import * as React from "react";
import { Link, navigate } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import './request.css';
import name from "./../images/images_png/name.png";
import loc from "./../images/images_png/loc.png";
import stat from "./../images/images_png/status.png";
import audio from "./../images/images_png/send_audio.png";

export default function RequestHelp() {
    return (
        <div id='mainBar'>
            <h1 id='header'>Submit Request</h1>
            <img src={name} width='100%' id='name' ></img>
            <img src={loc} width='100%' id='name' ></img>
            <img src={stat} width='100%' id='name' ></img>
            <img src={audio} width='100%' id='name' ></img>

            <button id='firstst' onClick={() => navigate('/')}>
                back
                </button>
            {/* <Link to="/">HOME</Link> */}
        </div>
    )
}


/*
return (
        <div>
            <Link to="/">HOME</Link>
        </div>
    )
*/