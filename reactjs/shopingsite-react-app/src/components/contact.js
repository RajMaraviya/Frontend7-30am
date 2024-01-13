import React, { StrictMode, useRef } from 'react';
import Footer from './Footer';
import axios from "axios";

export default function Contact() {

    const fname = useRef("");
    const lname = useRef("");
    const email = useRef("");
    const mobile = useRef("");
    const address = useRef("");
    const subject = useRef("");
    const message = useRef("");

    const AddContactHandler = () => {
        var insert = {
            fname: fname.current.value,
            lname: lname.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            address: address.current.value,
            subject: subject.current.value,
            message: message.current.value
        }

        axios.post("https://project-data-8dy4.onrender.com/customer", insert)
            .then(() => {
                alert('contact back you soon');
                window.location="/Contact"
            });

    }



    return (
        <StrictMode>
            <section id="page-header" class="about-header">
                <h2>#Let's talk </h2>
                <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>
            </section>

            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>Get in touch</span>
                    <h2>Visit one of our agency location or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i class="fal fa-map"></i>
                            <p>02 street, kalavad main road, rajkot</p>
                        </li>
                        <li>
                            <i class="fal fa-envelope"></i>
                            <p>maraviya.raj.raj@gmail.com</p>
                        </li>
                        <li>
                            <i class="fal fa-phone-alt"></i>
                            <p>(+91)76228-22556</p>
                        </li>
                        <li>
                            <i class="fal fa-clock"></i>
                            <p>Monday - saturday : 9.00am - 16.00pm</p>
                        </li>
                    </div>
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230.7801273951301!2d70.78064720017375!3d22.259722912404587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681469833582!5m2!1sen!2sin" style={{ border: "0px", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love you hear from you</h2>
                    <input type="text" className='text-white text-capitalize' placeholder="First Name" ref={fname}></input>
                    <input type="text" className='text-white text-capitalize' placeholder="Last Name" ref={lname}></input>
                    <input type="email" className='text-white text-lowercase' placeholder="Email" ref={email}></input>
                    <input type="text" className='text-white text-capitalize' placeholder="Mobile No." ref={mobile}></input>
                    <input type="text" className='text-white text-capitalize' placeholder="Address" ref={address}></input>
                    <input type="text" className='text-white text-capitalize' placeholder="Subject" ref={subject}></input>
                    <textarea cols="30" rows="4" className='text-white text-capitalize' placeholder="Your Message" ref={message}></textarea>
                    <button type="button" class="normal" onClick={AddContactHandler}>Send</button>
                </form>
                <div class="people">
                    <div>
                        <img src="img/people/1.png" alt="img" />
                        <p><span>John Doe</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contect@example.com</p>
                    </div>
                    <div>
                        <img src="img/people/2.png" alt="img" />
                        <p><span>John Doe</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contect@example.com</p>
                    </div>
                    <div>
                        <img src="img/people/3.png" alt="img" />
                        <p><span>John Doe</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contect@example.com</p>
                    </div>
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
        </StrictMode>
    )
}
