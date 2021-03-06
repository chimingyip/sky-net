import * as React from "react";
import { navigate } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import logo from "./../images/skynet.png";

import { useEffect } from "react";
const HomePage = (props) => {
    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    return (
        <main style={{ width: '100%', height: '100%', margin: 0, padding: 0, top: 0 }}>
            <title>Sky-net</title>
            <div id='mainBar'>
                {/* <h1>Hello World</h1> */}
                <button id='first' onClick={() => navigate('information-feed')}>
                    OFFICAL INFORMATION
                </button>
                <button id='second' onClick={() => navigate('request-help')}>
                    REQUEST HELP
                </button>
                <button id='third' onClick={() => navigate('chat')}>
                    CHAT WITH EMERGENCY SERVICES
                </button>
                <img src={logo} width='50%' style={{ marginTop: 'auto'}}/>
                {/* <p style={{margin: 0}}>hello</p> */}
            </div>
        </main>
    )
}


export default HomePage;