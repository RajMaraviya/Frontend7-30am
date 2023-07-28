import React from 'react';
import Footer from './Footer';

export default function Blog() {
  return (
    <strictMode>
      <section id="page-header" class="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies our product!</p>
      </section>

      <section id="blog">
        <div class="blog-box">
          <div class="blog-img">
            <img src="img/blog/b1.jpg" alt="img" />
          </div>
          <div class="blog-details">
            <h4>The Cotton-jersey Zip-up Hoodie</h4>
            <p>kickstarter man braid godard coloring book. reclatte waistcoat selfies yr wolf charreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="img/blog/b2.jpg" alt="img" />
          </div>
          <div class="blog-details">
            <h4>The Cotton-jersey Zip-up Hoodie</h4>
            <p>kickstarter man braid godard coloring book. reclatte waistcoat selfies yr wolf charreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="img/blog/b3.jpg" alt="img" />
          </div>
          <div class="blog-details">
            <h4>The Cotton-jersey Zip-up Hoodie</h4>
            <p>kickstarter man braid godard coloring book. reclatte waistcoat selfies yr wolf charreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="img/blog/b4.jpg" alt="img" />
          </div>
          <div class="blog-details">
            <h4>The Cotton-jersey Zip-up Hoodie</h4>
            <p>kickstarter man braid godard coloring book. reclatte waistcoat selfies yr wolf charreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="img/blog/b5.jpg" alt="img" />
          </div>
          <div class="blog-details">
            <h4>The Cotton-jersey Zip-up Hoodie</h4>
            <p>kickstarter man braid godard coloring book. reclatte waistcoat selfies yr wolf charreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>

      <section id="pagination" class="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i class="fal fa-long-arrow-right"></i></a>
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
