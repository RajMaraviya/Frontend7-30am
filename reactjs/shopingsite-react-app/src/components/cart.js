import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import { ProductPrice, ProductPrice1, ProductPrice2, CrtTotal } from './cartScript';

export default function Cart() {
    
       


    return (
        <strictMode>
            <section id="page-header" class="about-header">
                <h2>#Your Cart</h2>
                <p>Ready to proceed, We delivery Your product as soon as possible....!</p>
            </section>
            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {product && product.map((pro) => {
                            return (
                                <> */}
                                    <tr>
                                        <td><a href="#" class="delete"><i class="far fa-times-circle"></i></a></td>
                                        <td><img src="" alt="img" /></td>
                                        <td>Cartoon Astonaut T-shirt----1</td>
                                        <td id='price'></td>
                                        <td><input type="number" min="1" max="10" id="cartItem" onChange={ProductPrice}></input></td>
                                        <td>₹<span id="sub-total">399</span></td>
                                    </tr>
                                {/* </>
                            )
                        })} */}

                        {/* <tr>
                    <td><a href="#" class="delete"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/f2.jpg" alt="img" /></td>
                    <td>Cartoon Astonaut T-shirt</td>
                    <td>799.00</td>
                    <td><input type="number" min="1" max="10" id="cartItem1" onChange={ProductPrice1}></input></td>
                    <td>₹<span id="sub-total1">799</span></td>
                </tr>
               <tr>
                    <td><a href="#" class="delete"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/f3.jpg" alt="img" /></td>
                    <td>Cartoon Astonaut T-shirt</td>
                    <td>969.00</td>
                    <td><input type="number" min="1" max="10" id="cartItem2" onChange={ProductPrice2}></input></td>
                    <td>₹<span id="sub-total2">969</span></td>
                </tr> */}
                    </tbody>
                </table>
            </section>
            <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon"></input>
                        <button class="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Total</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td id="cart-sub-total" onChange={CrtTotal}>₹335</td>

                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Grand Total</strong></td>
                            <td><strong>₹335</strong></td>
                        </tr>
                    </table>
                    <button class="normal">proceed to checkout</button>
                </div>
            </section>
            <Footer />
        </strictMode>
    )
}
