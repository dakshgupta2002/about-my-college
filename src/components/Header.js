import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/qna">QnA</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/interview">Interviews</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/experience">Experiences</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/seniors">About Seniors</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/opportunities">Opportunities</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                
            </ul>

                </div>
    </nav>
        </div>
    )
}
