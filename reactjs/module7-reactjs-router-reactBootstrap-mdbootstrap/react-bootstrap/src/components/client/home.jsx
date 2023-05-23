import React from "react";

function Home()
{
    return (
        <React.StrictMode>
            <section id="header">
                <a href=""><img alt="logo" class="logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="index.html" class="active">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li>
                        <a href="#" id="close"><i class="far fa-times"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#"><i class="far fa-shopping-bag"></i></a>
                    <i id="bar" class="fas fa-outdent"></i>
                </div>
            </section>

            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" class="section-p1">
                <div class="feature-box">
                    <img src="img/features/f1.png" alt="imgs" />
                    <h6>Free Shipping</h6>
                </div>
                <div class="feature-box">
                    <img src="img/features/f2.png" alt="imgs" />
                    <h6>Online Order</h6>
                </div>
                <div class="feature-box">
                    <img src="img/features/f3.png" alt="imgs" />
                    <h6>Save Money</h6>
                </div>
                <div class="feature-box">
                    <img src="img/features/f4.png" alt="imgs" />
                    <h6>Promotions</h6>
                </div>
                <div class="feature-box">
                    <img src="img/features/f5.png" alt="imgs" />
                    <h6>Happy Sell</h6>
                </div>
                <div class="feature-box">
                    <img src="img/features/f6.png" alt="imgs" />
                    <h6>24/7 Support</h6>
                </div>
            </section>

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div class="pro-container">
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f1.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f2.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f3.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f4.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f5.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f6.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f7.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f8.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>
            
            <section id="banner" class="section-m1">
                <h4>Todays Offers</h4>
                <h2>Up to <span> 70% Off </span>- All t-shirts $Accesories</h2>
                <button class="normal">Explore More</button>
            </section>

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div class="pro-container">
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f1.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f2.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f3.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f4.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f5.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f6.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f7.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro" onclick="window.location.href='sproduct.html';">
                        <img src="img/products/f8.jpg" alt="imgs" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut Shirt</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>₹999.00</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="sm-banner" class="section-p1">
                <div class="banner-box">
                    <h4>Crazy Deals</h4>
                    <h2>Buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale</span>
                    <button class="white">Learn More</button>
                </div>
                <div class="banner-box banner-box2">
                    <h4>Spring / summer</h4>
                    <h2>Upcomming Season</h2>
                    <span>The best classic dress is on sale</span>
                    <button class="white">Collection</button>
                </div>
            </section>

            <section id="banner3">
                <div class="banner-box">
                    <h2>Season sale</h2>
                    <h3>Winter collection - 50% OFF</h3>
                </div>
                <div class="banner-box banner-box2">
                    <h2>footwear collection</h2>
                    <h3>Spring / summer</h3>
                </div>
                <div class="banner-box banner-box3">
                    <h2>t-shirt</h2>
                    <h3>new trandy prints</h3>
                </div>
            </section>

            <section id="newsletter" class="section-p1 section-m1">
                <div class="newstext">
                    <h4>Sing Up For newsletter</h4>
                    <p>Get E-mail update about our latest shop and <span>special offers.</span></p>
                </div>
                <div class="form">
                    <div>
                        <input type="text" placeholder="Your E-mail adress" name="" id="" />
                            <button class="normal">Sign Up</button>
                    </div>
                </div>
            </section>

            <footer id="footer" class="section-p1">
                <div class="col">
                    <img src="img/main-logo.png" alt="logo" class="logo ftr-logo" />
                    <h4>Contact</h4>
                    <p><strong>Adress</strong> : street-1, rajkot, 562 Wellington Road, san Francisco</p>
                    <p><strong>Phone</strong> : (+90) 76228-22556</p>
                    <p><strong>Hours</strong> : 10:00 - 18:00, Mon - Sat</p>
                    <div class="follow">
                        <h4>Follow Us</h4>
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-pinterest-p"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term & condition</a>
                    <a href="#">Contact Us</a>
                </div>

                <div class="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>

                <div class="col install">
                    <h4>Install App</h4>
                    <p>From App or Google Play</p>
                    <div class="row">
                        <img src="img/pay/app.jpg" alt="" />
                        <img src="img/pay/play.jpg" alt="" />
                    </div>
                    <p>Secure Payment Gateways</p>
                    <img src="img/pay/pay.png" alt="" />
                </div>
                <div class="copyright">
                    <p>&copy; Developed by raj maraviya</p>
                </div>
            </footer>
        </React.StrictMode>
    )
}
export default Home;