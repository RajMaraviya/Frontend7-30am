import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from './sideBar';
import axios from 'axios';
import { Nav } from 'react-bootstrap';

export default function ManageProducts() {
  const Navigate = useNavigate();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, [])

  function getProduct() {
    axios.get("http://localhost:4000/product")
      .then((response) => {
        setproduct(response.data)
      });
  }
  function deleteProduct(id) {
    fetch(`http://localhost:4000/product/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getProduct()
      })
    })
  }
  return (
    <>
      <SideBar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title"> Manage Products </h3>
            </div>
            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Manage Products</h4>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th className='text-center'> p_# </th>
                            <th className='text-center'>Product Name</th>
                            <th className='text-center'>preview</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Offer-Price</th>
                            <th className='text-center'>Rating</th>
                            <th className='text-center'>Product description</th>
                            <th className='text-center'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product && product.map((pro) => {
                            return (
                              <>
                                <tr>
                                  <td className='text-center' key={pro.id}>{pro.id}</td>
                                  <td className='text-center' key={pro.pname}>{pro.pname}</td>
                                  <td className='text-center' key={pro.link}>
                                    <img src={pro.link} style={{ height: "50px", width: "50px" }} />
                                    <img src={pro.link1} style={{ height: "50px", width: "50px" }} />
                                    <img src={pro.link2} style={{ height: "50px", width: "50px" }} />
                                    <img src={pro.link3} style={{ height: "50px", width: "50px" }} />
                                    <img src={pro.link4} style={{ height: "50px", width: "50px" }} />
                                  </td>
                                  <td className='text-center' key={pro.category}>{pro.category}</td>
                                  <td className='text-center' key={pro.price}>{pro.price}</td>
                                  <td className='text-center' key={pro.offerprice}>{pro.offerprice}</td>
                                  <td className='text-center' key={pro.rating}><i className='bi bi-star-fill'></i>{pro.rating}</td>
                                  <td className='text-center' key={pro.description}>{pro.description}</td>
                                  <td className='text-center'>
                                    <button className='btn p-0 m-0' onClick={() => Navigate(`/admin-dashboard/update-product/${pro.id}`)}><i class="bi bi-pencil-square text-success"></i></button>
                                    |
                                    <button className='btn p-0 m-0' onClick={() => {if(window.confirm('Delete the item?')){deleteProduct(pro.id)};} }><i class="bi bi-trash text-danger"></i></button>
                                  </td>
                                </tr>
                              </>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
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
