import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/shop';
import Blog from './components/blog';
import About from './components/about';
import Contact from './components/contact';
import Cart from './components/cart';
import PageNotFound from './components/PageNotFound';

export default function Layout(){
  return (
    <strictMode>
      {/* <Navbar />
      <Home />
      <Shop />
      <Blog />
      <About />
      <Contact />
      <Cart />
      <PageNotFound /> */}
    </strictMode>
  )
}
