import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from '../NavigationScript';
import jQuery from 'jquery';


export default function Navbar(props) {
    useEffect(()=>{
        (function($){
            $('ul').on("click", 'li a', function() {
                $('ul li a.active').removeClass('active');
                $(this).addClass('active');
              });
        })(jQuery);
    })

    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
        <>
            <section id="header" onLoad={Navigation}>
                <Link to="#" className='animate-logo'><img src="img/main-logo.png" alt="logo" className="logo" /></Link>
                <div>
                    <ul id="navbar">
                        <li><Link to="/" className='active'>Home</Link></li>  {/* className="active" */}
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li className="nav-item dropdown">
                            <Link id="profileDropdown" data-bs-toggle="dropdown" ><i className="bi bi-person-circle"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                <h6 className="p-2">Profile</h6>
                                <div className="dropdown-divider"></div>
                                <Link to="/admin-login" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="bi bi-box-arrow-in-left text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Login</p>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="bi bi-box-arrow-right text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Log out</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <p className="p-3 mb-0 text-center">Advanced settings</p>
                            </div>
                        </li>
                        <li><Link to="/Cart"><i className="bi bi-bag"></i></Link></li>
                        <Link to="#" id="close"><i className="bi bi-x-lg"></i></Link>
                    </ul>
                </div>
                <div id="mobile">
                    <Link to="/Cart">
                        <i className="bi bi-bag" style={{ fontSize: "18px" }}></i>
                    </Link>
                    <i id="bar" className="bi bi-text-indent-right" style={{ marginTop: "1px" }}></i>
                </div>
            </section>
            <Outlet />
        </>
    )
}
