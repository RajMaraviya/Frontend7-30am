import React, { useEffect, useRef } from 'react';
import SideBar from './sideBar';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateCategory() {

    const Navigate = useNavigate();
    const { id } = useParams();
    
    const category = useRef("");

    //edit data inside UpdateCategory component
    useEffect(() => {
        axios.get(`http://localhost:4000/category/${id}`)
            .then((response) => {
                category.current.value = response.data.category;
            });
    }, []);


    const UpdateCategoryHandler = () => {
        var update = {
            category: category.current.value
        };

        //update the data using PUT method
        axios.put(`http://localhost:4000/category/${id}`, update)
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: 'Update successfully'
                  })
                Navigate("/admin-dashboard/manage-category");
            });
    }

    return (
        <>
            <SideBar />
            <div class="container-fluid page-body-wrapper">
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="page-header">
                            <h3 class="page-title">Update Category</h3>
                        </div>
                        <div class="row">
                            <div class="col-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title fw-bolder fs-4">Update Category</h4>
                                        <form class="forms-sample">
                                            <div class="form-group">
                                                <label>Category Name</label>
                                                <input type="text" class="form-control text-white text-capitalize" placeholder="Edit Category Name" ref={category} />
                                            </div>
                                            <button type="button" class="btn btn-primary me-2" onClick={() => {if(window.confirm('Update this item?')){UpdateCategoryHandler()};}}>Update Category</button>
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
