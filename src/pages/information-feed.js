import * as React from "react";
import { Link } from "gatsby";
import 'fontsource-poppins';
import './button.css';
import logo from "./../images/skynet.png";

export default function InformationFeed() {
    return (
        <div id='mainBar'>
            <h1>Hello World</h1>
            <Link to="/">HOME</Link>
        </div>
    )
}