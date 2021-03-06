import * as React from "react";
import { Link, navigate } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import './popup.css';
import rec from "./../images/images_png/recieve_req.png";
import x_but from "./../images/images_png/x_but.png";
import { useEffect } from "react";

export default function Popup(props) {
    return (
        <div style={{ backgroundColor: '#EFF0F6', height: '100%', width: '100%'}}>
            <div id='mainBar2'  style={{
                backgroundColor: '#EFF0F6',
            }}>
                <img src={rec} width='120%' id='rec' ></img>
                <button id='red' onClick={() => navigate('/request-help', {state: props.location.state})}>
                    Update Status
                </button>
                <img src={x_but} width='20%' id='x' onClick={() => navigate('/')}></img>
            </div>
        </div>
    )
}
