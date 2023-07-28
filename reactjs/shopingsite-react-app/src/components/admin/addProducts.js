import React, { useRef, useState } from 'react';
import SideBar from './sideBar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { type } from '@testing-library/user-event/dist/type';


export default function AddProducts() {

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

    const AddProductHandler = () =>{
        var insert = {
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
        }

        axios.post("http://localhost:4000/product", insert)
        .then(()=>{
            Swal.fire({
                text: 'Product added',
                icon: 'success'
              });

        });
    }

    const [cat, setCat] = useState(null);

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
                                            <button type="button" class="btn btn-primary me-2" onClick={AddProductHandler}>Add Product</button>
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
