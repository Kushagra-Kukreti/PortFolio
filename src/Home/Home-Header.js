import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
export default function HomeHeader() {
    return (
        <div>
            <nav  id ="header" className="navbar navbar-expand-lg navbar-dark p-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/"}className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item active">
                            <Link to={"About"}className="nav-link" >About <span className="sr-only">(current)</span></Link>
                        </li>
                        {/* <li className="nav-item active">
                            <Link to={"Contact"} className="nav-link">Contact <span className="sr-only">(current)</span></Link>
                        </li> */}
                         
                    </ul>
                </div>
            </nav>
        </div>
    )
}
