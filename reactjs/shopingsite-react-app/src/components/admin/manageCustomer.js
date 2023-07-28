import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sideBar';
import { ExportToExcel } from './ExportToExcel';

export default function ManageCustomer() {

    const [customer, setCustomer] = useState(null);
    const fileName = "Customers";

    useEffect(()=>{
      getCustomer()
    },[])

    function getCustomer(){
      fetch('http://localhost:4000/customer')
        .then((response) => response.json())
        .then((customer) => setCustomer(customer))
    }
    function deleteCustomer(id)
    {
      fetch(`http://localhost:4000/customer/${id}`,{
        method:'DELETE'
      }).then((result) => {
        result.json().then((resp)=>{
          console.log(resp);
          getCustomer()
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
              <h3 class="page-title"> Manage Customer </h3>
              <ExportToExcel apiData={customer} fileName={fileName} />
            </div>
            <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Manage Customer</h4>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th className='text-center'> p_# </th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Surname </th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Mobile No.</th>
                            <th className='text-center'>Adress</th>
                            <th className='text-center'>Subject</th>
                            <th className='text-center'>Message</th>
                            <th className='text-center'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {customer && customer.map((item) => {
                                return (
                                    <tr>
                                        <td className='text-center' key={item.id}>{item.id}</td>
                                        <td className='text-center text-capitalize' key={item.fname}>{item.fname}</td>
                                        <td className='text-center text-capitalize' key={item.lname}>{item.lname}</td>
                                        <td className='text-center text-lowercase' key={item.email}>{item.email}</td>
                                        <td className='text-center' key={item.mobile}>{item.mobile}</td>
                                        <td className='text-center text-capitalize' key={item.address}>{item.address}</td>
                                        <td className='text-center text-capitalize' key={item.subject}>{item.subject}</td>
                                        <td className='text-center text-capitalize' key={item.message}>{item.message}</td>
                                        <td className='text-center'><button className='btn p-0 m-0' onClick={()=> deleteCustomer(item.id)}><i class="bi bi-trash text-danger"></i></button></td>
                                    </tr>
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
