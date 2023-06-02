import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse } from 'mdb-react-ui-kit';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand><Link to="/">LOGO</Link></MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}>
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav>
                            <MDBNavbarLink active aria-current='page'><Link to="/">Home</Link></MDBNavbarLink>
                            <MDBNavbarLink><Link to="/About">About</Link></MDBNavbarLink>
                            <MDBNavbarLink><Link to="/Gallary">Gallary</Link></MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet />
        </>
    )
}
