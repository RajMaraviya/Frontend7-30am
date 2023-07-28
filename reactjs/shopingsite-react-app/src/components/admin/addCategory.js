import React, { useRef } from 'react';
import SideBar from './sideBar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function AddCategory() {

  const Navigate = useNavigate();
  const Swal = require('sweetalert2')
  const category = useRef("");

  const AddCategoryHandler = () =>{
    var insert = {
      category:category.current.value
    }

    getUser();
    function getUser(){
      axios.post("http://localhost:4000/category", insert)
        .then(() => {
          Swal.fire({
            icon: 'success',
            text: 'category added'
          })
        });
    }
  }

  

  return (
    <>
      <SideBar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title">Add Category</h3>
            </div>
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title fw-bolder fs-4">Add Category</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" class="form-control text-white text-capitalize" placeholder="Enter Category Name" ref={category} />
                      </div>
                      <button type="button" class="btn btn-primary me-2" onClick={AddCategoryHandler}>Add Category</button>
                      <button type='reset' class="btn btn-dark">Reset</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
