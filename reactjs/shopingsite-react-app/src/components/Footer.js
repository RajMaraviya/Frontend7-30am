import React, { StrictMode } from 'react'

export default function Footer() {
  return (
    <StrictMode>
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
          </StrictMode>
  )
}
