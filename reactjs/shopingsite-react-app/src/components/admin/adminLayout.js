import React from 'react';
import './assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js'


import SideBar from './sideBar';
import Content from './content';
import AddProducts from './addProducts';


export default function AadminLayout() {
  return (
    <div>
      <Content />
    </div>
  )
}
