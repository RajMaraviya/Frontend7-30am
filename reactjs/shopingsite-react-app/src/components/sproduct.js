import React from 'react';
import Footer from './Footer';

export default function sproduct() {
    return (
        <div>
            <section id="product1" class="section-p1">
                <h2>Featured Product</h2>
                <p>Summer Collection New Morden Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <img src="img/products/n1.jpg" alt="img" />
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
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro">
                        <img src="img/products/n2.jpg" alt="img" />
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
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro">
                        <img src="img/products/n3.jpg" alt="img" />
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
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro">
                        <img src="img/products/n4.jpg" alt="img" />
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
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="prodetails" class="section-p1">
                <div class="single-pro-image">
                    <img src="img/products/f1.jpg" width="100%" id="MainImg" alt="img" />
                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src="img/products/f1.jpg" alt="img" width="100%" onclick="chngImg0()" class="small-img" />
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f2.jpg" alt="img" width="100%" onclick="chngImg1()" class="small-img" />
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f3.jpg" alt="img" width="100%" onclick="chngImg2()" class="small-img" />
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f4.jpg" alt="img" width="100%" onclick="chngImg3()" class="small-img" />
                        </div>
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Home / Tshirt</h6>
                    <h4>Men's Fashion T-shirt</h4>
                    <h2>$139.00</h2>
                    <select>
                        <option>Select size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Larg</option>
                    </select>
                    <input type="number" value="1"></input>
                    <button class="normal">Add To Cart</button>
                    <h4>product Details</h4>
                    <span>The golden ultra cotton t_shirt is made from a substantial 6.0 oz. per sq yd. fabric constucted from 100% cotton. thus classic fit preshrunk jersey knit provide unmatched comfort with each wear. featuring top nack and shoulder . and a seameless double-niddel collar and available in a range of colors. if offers it all in the ultimate head-turnig package.</span>
                </div>
            </section>

            

            <section id="newsletter" class="section-p1 section-m1">
                <div class="newstext">
                    <h4>Sing Up For newsletter</h4>
                    <p>Get E-mail update about our latest shop and <span>special offers.</span></p>
                </div>
                <div class="form">
                    <div>
                        <input type="text" placeholder="Your E-mail adress" name="" id=""></input>
                            <button class="normal">Sign Up</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
