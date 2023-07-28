import React from 'react';
import Footer from './Footer';


export default function About() {
  return (
    <strictMode>
      <section id="page-header" class="about-header">
        <h2>#KnowUs</h2>
        <p>Khow us more!</p>
      </section>

      <section id="about-head" class="section-p1">
        <img src="img/about/a6.jpg" alt="img" />
        <div>
          <h2>Who We Are?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus praesentium incidunt. Laboriosam nam ea expedita, excepturi dolorem eaque debitis deleniti ex itaque at, suscipit aliquam blanditiis neque cum consectetur.</p>
          <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic molestias, nemo et molestiae ad modi, at fugiat impedit quo expedita.</abbr>
          <br /><br />
          <marquee bgcolor="#eb8d13" loop="-1" scrollamount="5" scrolldelay="150" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic molestias, nemo et molestiae ad modi, at fugiat impedit quo expedita.</marquee>
        </div>
      </section>

      <section id="about-app" class="section-p1">
        <h1>Dounload Our <a href="#">App</a></h1>
        <div class="video">
          <video autoplay muted loop src="img/about/1.mp4"></video>
        </div>
      </section>

      <section id="feature" class="section-p1">
        <div class="feature-box">
          <img src="img/features/f1.png" alt="img" />
          <h6>Free Shipping</h6>
        </div>
        <div class="feature-box">
          <img src="img/features/f2.png" alt="img" />
          <h6>Online Order</h6>
        </div>
        <div class="feature-box">
          <img src="img/features/f3.png" alt="img" />
          <h6>Save Money</h6>
        </div>
        <div class="feature-box">
          <img src="img/features/f4.png" alt="img" />
          <h6>Promotions</h6>
        </div>
        <div class="feature-box">
          <img src="img/features/f5.png" alt="img" />
          <h6>Happy Sell</h6>
        </div>
        <div class="feature-box">
          <img src="img/features/f6.png" alt="img" />
          <h6>24/7 Support</h6>
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
    </strictMode>
  )
}
