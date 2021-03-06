import * as React from "react";
import { Link } from "gatsby";
import 'fontsource-poppins';
import './button.css';


const homePage = () => {
    return (
        <main style={{ width: '100%', height: '90%', margin: 0, padding: 0, top: 0 }}>
            <title>Sky-net</title>
            <div id='mainBar'>
                {/* <h1>Hello World</h1> */}
                <button id='first'>
                    OFFICAL INFORMATION
                </button>
                <button id='second'>
                    REQUEST HELP
                </button>
                <button id='third'>
                    CHAT WITH EMERGENCY SERVICES
                </button>
                {/* <p style={{margin: 0}}>hello</p> */}
            </div>
        </main>
    )
}


export default homePage;

const mainBarStyles = {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    margin: '2% auto',
    maxWidth: '50em',
    width: '60%',
    minHeight: 500,
    height: '100%',
}
const buttonStyles = {
    width: '100%',
    fontFamily: 'Poppins',
    marginVertical: 50,
    borderRadius: 18,
    fontWeight: 'Bold',
    fontSize: 36,
    color: 'white'
    
}