import React, {useState, useEffect, useRef } from 'react';
import SideBar from './sideBar';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateProduct() {

    const Navigate = useNavigate();
    const { id } = useParams();
    const [cat, setCat] = useState(null);
    
    const pname = useRef("");
    const link = useRef("");
    const link1 = useRef("");
    const link2 = useRef("");
    const link3 = useRef("");
    const link4 = useRef("");
    const category = useRef("");
    const price = useRef("");
    const offerprice = useRef("");
    const rating = useRef("");
    const description = useRef("");

    //edit data inside UpdateCategory component
    useEffect(() => {
        axios.get(`http://localhost:4000/product/${id}`)
            .then((response) => {
                pname.current.value = response.data.pname;
                link.current.value = response.data.link;
                link1.current.value = response.data.link1;
                link2.current.value = response.data.link2;
                link3.current.value = response.data.link3;
                link4.current.value = response.data.link4;
                category.current.value = response.data.category;
                price.current.value = response.data.price;
                offerprice.current.value = response.data.offerprice;
                rating.current.value = response.data.rating;
                description.current.value = response.data.description;
            });
    }, []);

    // Function for Update data
    const UpdateProductHandler = () => {
        var update = {
            pname:pname.current.value,
            link:link.current.value,
            link1:link1.current.value,
            link2:link2.current.value,
            link3:link3.current.value,
            link4:link4.current.value,
            category:category.current.value,
            price:price.current.value,
            offerprice:offerprice.current.value,
            rating:rating.current.value,
            description:description.current.value
        };

        //update the data using PUT method
        axios.put(`http://localhost:4000/product/${id}`, update)
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: 'Update successfully'
                  })
                Navigate("/admin-dashboard/manage-product");
            });
    }

    // fetch category in input
    fetch("http://localhost:4000/category")
    .then((response) => response.json())
    .then((cat) => setCat(cat))
    return (
        <>
            <SideBar />
            <div class="container-fluid page-body-wrapper">
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="page-header">
                            <h3 class="page-title">Add Products</h3>
                        </div>
                        <div class="row">
                            <div class="col-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title fw-bolder fs-4">Add Product</h4>
                                        <form class="forms-sample">
                                        <div class="form-group">
                                                <label for="exampleSelectGender">Choose Category</label>
                                                <select class="form-control text-white" ref={category}>
                                                <option>-select category-</option>
                                                    {cat && cat.map((item) => {
                                                        return(
                                                            <>
                                                                <option value={item.category}>{item.category}</option>
                                                            </>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Product Name</label>
                                                <input type="text" class="form-control text-capitalize text-white" placeholder="Enter product Name" ref={pname} />
                                            </div>
                                            <div class="form-group">
                                                <label>Product URL Main</label>
                                                <input type="text" class="form-control text-white fw-lighter" placeholder="Upload URL" ref={link} />
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label>Product URL 1</label>
                                                    <input type="text" class="form-control text-white fw-lighter" placeholder="Upload URL" ref={link1} />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Product URL 2</label>
                                                    <input type="text" class="form-control text-white fw-lighter" placeholder="Upload URL" ref={link2} />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Product URL 3</label>
                                                    <input type="text" class="form-control text-white fw-lighter" placeholder="Upload URL" ref={link3} />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Product URL 4</label>
                                                    <input type="text" class="form-control text-white fw-lighter" placeholder="Upload URL" ref={link4} />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="col-sm-3 col-form-label">Price</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control text-white" placeholder='Price' ref={price}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="col-sm-3 col-form-label">Offer Price</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control text-white" placeholder='Offer Price' ref={offerprice}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="col-sm-3 col-form-label">Rating</label>
                                                        <div class="col-sm-9">
                                                        <input type="number" min="0" max="5" class="form-control text-white input-number" placeholder="Rate product out of 5" ref={rating}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="form-group">

                                            </div> */}

                                            {/* <div class="form-group">
                                                <label for="exampleSelectGender">Gender</label>
                                                <select class="form-control" id="exampleSelectGender">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div> */}
                                            
                                            <div class="form-group">
                                                <label>Product description</label>
                                                <input type="text" class="form-control text-white text-capitalize" placeholder="Product description" ref={description}/>
                                            </div>
                                            <button type="button" class="btn btn-primary me-2" onClick={() => {if(window.confirm('Update this item?')){UpdateProductHandler()};}}>Update Product</button>
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
