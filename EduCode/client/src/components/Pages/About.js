import React, {Component} from 'react';
import { Link, useHistory } from "react-router-dom";

class About extends Component{

    render(){
        return(
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">EduCode</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/submitcode">Submit</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/searchcode">Search</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="home-header context">
                    <div className="header-text">
                        <h1 className="welcome-to">This web app was created by</h1>
                        <h1 className="educode">Leonardo De Vietro</h1>
                        <h3>Check my portfolio in the button down below.</h3>
                        <a class="btn btn-primary btn-lg btn-light" style={{textAlign: 'center', display: 'table', margin: 'auto', marginTop: '30px', width: '300px'}} href="https://vietro.herokuapp.com" target="_blank">Go to Portfolio</a>
                    </div>
                </div>
                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </header>
        )
    }
}

export default About;
