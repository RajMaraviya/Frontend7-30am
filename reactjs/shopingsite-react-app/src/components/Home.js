import React, { StrictMode, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export function ChImg()
{
  var MainImg = document.getElementById('MainImg');
  var smImage = document.getElementsByClassName('small-img');

  smImage[0].onclick = function () {
    MainImg.src = smImage[0].src;
  }
  smImage[1].onclick = function () {
    MainImg.src = smImage[1].src;
  }
  smImage[2].onclick = function () {
    MainImg.src = smImage[2].src;
  }
  smImage[3].onclick = function () {
    MainImg.src = smImage[3].src;
  }
}

export default function Home() {

  let styleActive = {}

  const Navigate = useNavigate();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/product")
      .then((response) => {
        setproduct(response.data)
      });
  }, [])

  return (
    <StrictMode>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button><Link to="/shop">Shop Now</Link></button>
      </section>

      <section id="feature" className="section-p1">
        <div className="feature-box">
          <img src="img/features/f1.png" alt="img" />
          <h6>Free Shipping</h6>
        </div>
        <div className="feature-box">
          <img src="img/features/f2.png" alt="img" />
          <h6>Online Order</h6>
        </div>
        <div className="feature-box">
          <img src="img/features/f3.png" alt="img" />
          <h6>Save Money</h6>
        </div>
        <div className="feature-box">
          <img src="img/features/f4.png" alt="img" />
          <h6>Promotions</h6>
        </div>
        <div className="feature-box">
          <img src="img/features/f5.png" alt="img" />
          <h6>Happy Sell</h6>
        </div>
        <div className="feature-box">
          <img src="img/features/f6.png" alt="img" />
          <h6>24/7Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          {product && product.map((pro, index) => {
            return (
              <>
                <div className="pro">
                  <img src={pro.link} id="MainImg" alt="img" />
                  <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={pro.link1} onClick={ChImg} alt="img" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={pro.link2} onClick={ChImg} alt="img" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={pro.link3} onClick={ChImg} alt="img" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={pro.link4} onClick={ChImg} alt="img" width="100%" className="small-img" />
                        </div>
                    </div>
                  <div className="des">
                    <span>adidas</span>
                    <h5>{pro.pname}</h5>
                    <div className="star">
                    <p><i className="bi bi-star-fill fs-6"></i> {pro.rating}</p>
                    </div>
                    <p className='my-1'>₹<s>{pro.price}</s>&nbsp; &nbsp;<b>₹{pro.offerprice}</b></p>
                  </div>
                  {/* <Link to=`/Cart/id=${pro.id}`><i className="bi bi-cart3 cart"></i></Link> */}
                  <button className='cart' onClick={()=> Navigate(`/Cart/${pro.id}`)}><i className="bi bi-cart3"></i></button>
                </div>
              </>
            )
          })}

        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Todays Offers</h4>
        <h2>Up to <span> 70% Off </span>- All t-shirts $Accesories</h2>
        <button type='button' className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro" >
            <img src="img/products/n1.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro">
            <img src="img/products/n2.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n3.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n4.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n5.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n6.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n7.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
          <div className="pro" >
            <img src="img/products/n8.jpg" alt="img" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shirt</h5>
              <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4>₹999.00</h4>
            </div>
            <Link to="#"><i className="bi bi-cart3 cart"></i></Link>
          </div>
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 get 1 free</h2>
          <span>The best classic dress is on sale</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring / summer</h4>
          <h2>Upcomming Season</h2>
          <span>The best classic dress is on sale</span>
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
            <input type="text" placeholder="Your E-mail adress"></input>
            <button className="normal">Sign Up</button>
          </div>
        </div>
      </section>
      <Footer />
    </StrictMode>
  )
}

