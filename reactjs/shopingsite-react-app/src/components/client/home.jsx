import React from "react";

function Home()
{
    return (
        <React.StrictMode>
            <section id="header">
                <a href=""><img src="img/logo-r.png" alt="logo" className="logo" style={{}} /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="index.html" className="active">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li id="lg-bag"><a href="cart.html"><i className="far fa-shopping-bag"></i></a></li>
                        <a href="#" id="close"><i className="far fa-times"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#"><i className="far fa-shopping-bag"></i></a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>

            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="feature-box">
                    <img src="img/features/f1.png" alt="imgs" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="feature-box">
                    <img src="img/features/f2.png" alt="imgs" />
                    <h6>Online Order</h6>
                </div>
                <div className="feature-box">
                    <img src="img/features/f3.png" alt="imgs" />
                    <h6>Save Money</h6>
                </div>
                <div className="feature-box">
                    <img src="img/features/f4.png" alt="imgs" />
                    <h6>Promotions</h6>
                </div>
                <div className="feature-box">
                    <img src="img/features/f5.png" alt="imgs" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="feature-box">
                    <img src="img/features/f6.png" alt="imgs" />
                    <h6>24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f1.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div classNameName="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f2.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f3.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f4.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f5.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f6.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f7.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f8.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>
            
            <section id="banner" className="section-m1">
                <h4>Todays Offers</h4>
                <h2>Up to <span> 70% Off </span>- All t-shirts $Accesories</h2>
                <button className="normal">Explore More</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f1.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f2.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f3.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f4.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f5.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f6.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f7.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick="window.location.href='sproduct.html';">
                        <img src="img/products/f8.jpg" alt="imgs" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>Crazy Deals</h4>
                    <h2>Buy 1 get 1 free</h2>
                    <span>The best classNameic dress is on sale</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>Spring / summer</h4>
                    <h2>Upcomming Season</h2>
                    <span>The best classNameic dress is on sale</span>
                    <button className="white">Collection</button>
                </div>
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>Season sale</h2>
                    <h3>Winter collection - 50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>footwear collection</h2>
                    <h3>Spring / summer</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>t-shirt</h2>
                    <h3>new trandy prints</h3>
                </div>
            </section>

            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sing Up For newsletter</h4>
                    <p>Get E-mail update about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <div>
                        <input type="text" placeholder="Your E-mail adress" name="" id="" />
                            <button className="normal">Sign Up</button>
                    </div>
                </div>
            </section>

            <footer id="footer" className="section-p1">
                <div className="col">
                    <img src="img/main-logo.png" alt="logo" className="logo ftr-logo" />
                    <h4>Contact</h4>
                    <p><strong>Adress</strong> : street-1, rajkot, 562 Wellington Road, san Francisco</p>
                    <p><strong>Phone</strong> : (+90) 76228-22556</p>
                    <p><strong>Hours</strong> : 10:00 - 18:00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term & condition</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>

                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App or Google Play</p>
                    <div className="row">
                        <img src="img/pay/app.jpg" alt="" />
                        <img src="img/pay/play.jpg" alt="" />
                    </div>
                    <p>Secure Payment Gateways</p>
                    <img src="img/pay/pay.png" alt="" />
                </div>
                <div className="copyright">
                    <p>&copy; Developed by raj maraviya</p>
                </div>
            </footer>
        </React.StrictMode>
    )
}
export default Home;