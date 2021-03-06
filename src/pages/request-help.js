import * as React from "react";
import { Link, navigate } from "gatsby";
import 'fontsource-poppins';
import './button.css';
// import './request.css';
// import name from "./../images/images_png/name.png";
// import loc from "./../images/images_png/loc.png";
// import stat from "./../images/images_png/status.png";
// import audio from "./../images/images_png/send_audio.png";
import phone from "./../images/phone_in_talk_24px_outlined.png";

export default function RequestHelp() {
    return (
        <div id='mainBar'>
            <h1 id='request-helpTitle' style={{marginBottom: 'auto'}}>Submit Request</h1>
            <h3 className='left-aligned request-help-header'>Name</h3>
            <input className='left-aligned request-help-name-input' type='text' name='name'></input>
            <h3 className='left-aligned request-help-header'>Location</h3>
            <p className='left-aligned request-help-header' id='request-help-location'>37.5084° S, 145.7474° E</p>
            <h3 className='left-aligned request-help-header'>Status</h3>
            <textarea className='left-aligned request-help-name-input' name='status' placeholder='Type your status...'></textarea>
            <h3 className='left-aligned request-help-header'>Send audio message</h3>
            <div id='request-help-call'><img src={phone}/></div>
            {/* <input className='left-aligned request-help-name-input' type='' name='name'></input> */}
            {/* <img src={name} width='100%' id='name' ></img> */}
            {/* <img src={loc} width='100%' id='name' ></img> */}
            {/* <img src={stat} width='100%' id='name' ></img> */}
            {/* <img src={audio} width='100%' id='name' ></img> */}

            <button id='secondnd'  onClick={() => navigate('/')}>
                REQUEST HELP
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