import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import 'sweetalert2/src/sweetalert2.scss';


import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

// client pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/shop';
import Blog from './components/blog';
import About from './components/about';
import Contact from './components/contact';
import Cart from './components/cart';
import PageNotFound from './components/PageNotFound';
import Sproduct from './components/sproduct';

// Admin pages
import Register from './components/register';
import LogIn from './components/login';
import AadminLayout from './components/admin/adminLayout';
import Content from './components/admin/content';
import AddProducts from './components/admin/addProducts';
import ManageProducts from './components/admin/manageProducts';
import UpdateProduct from './components/admin/updateProduct';
import AddCategory from './components/admin/addCategory';
import ManageCategory from './components/admin/manageCategory';
import UpdateCategory from './components/admin/updateCategory';
import ManageCustomer from './components/admin/manageCustomer';
import TestCustomer from './components/admin/testCustomer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/shop' element={<Shop />}/>
        <Route path='/Blog' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Sproduct' element={<Sproduct />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Cart/:id' element={<Cart />}/>
      </Route>

      <Route path='/admin-register' element={<Register />} />
      <Route path='/admin-login' element={<LogIn />} />
      <Route path='/admin-layout' element={<AadminLayout />} />
      <Route path='/admin-dashboard' element={<Content />} />
      <Route path='/admin-dashboard/add-product' element={<AddProducts />} />
      <Route path='/admin-dashboard/manage-product' element={<ManageProducts />}/>
      <Route path='/admin-dashboard/update-product/:id' element={<UpdateProduct />}/>
      <Route path='/admin-dashboard/add-category' element={<AddCategory />}/>
      <Route path='/admin-dashboard/manage-category' element={<ManageCategory />}/>
      <Route path='/admin-dashboard/update-category/:id' element={<UpdateCategory />}/>
      <Route path='/admin-dashboard/manage-customer' element={<ManageCustomer />}/>
      <Route path='/admin-dashboard/test-customer' element={<TestCustomer />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
