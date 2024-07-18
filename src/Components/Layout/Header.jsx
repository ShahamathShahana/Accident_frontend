import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Header = () => {
    const [collapse, setCollapse] = useState('')
    const path = window.location.pathname
    const collpasing = () => {
        setCollapse(`${collapse ? '' : 'show'}`)
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="index.html">Accident Alert Hub</a>
                <button className="navbar-toggler" 
                onClick={() => collpasing()}
                type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapse}`} id="navbarNav">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <a href="/home" className={`nav-link smoothScroll ${path==='/home' ? 'active':''}`}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/reportregister" className={`nav-link smoothScroll ${path==='/reportregister' ? 'active':''}`}>Register Report</a>
                        </li>
                        <li className="nav-item">
                            <a href="/viewreport" className={`nav-link smoothScroll ${path==='/viewreport' ? 'active':''}`}>View Report</a>
                        </li>
                    </ul>
                    <ul className="social-icon ml-lg-3">
                        <li><a href="https://fb.com/tooplate" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Header