import React from "react"
import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/">Home</Link></li>
                    <li className="topListItem"><Link to="/write">Write</Link></li>
                    <li className="topListItem"><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <i className="topSearchIcon far fa-search"></i>
            </div>
        </div>
    )
}