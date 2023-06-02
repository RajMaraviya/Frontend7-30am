import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';




function Home() {
    return (
        <React.StrictMode>
            <Navbar bg="light" expand="lg">
                <Container fluid className="px-5">
                    <Navbar href="#">LOGO</Navbar>
                    <ul className="menu">
                        <li className="me-4">Home</li>
                        <li className="me-4">About</li>
                        <li className="me-4">Shop</li>
                        <li className="me-4">Blog</li>
                        <li className="me-4">Contact</li>
                        <li className="me-4">Cart</li>
                        <li className="me-4"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Account</a></li>
                    </ul>
                    <Navbar id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="border-dark search-box m-0" aria-label="Search"/>
                            <Button className="bi bi-search m-0 bg-white border-dark search-btn text-dark"></Button>
                        </Form>
                    </Navbar>
                </Container>
            </Navbar>
        </React.StrictMode>
    )
}
export default Home;