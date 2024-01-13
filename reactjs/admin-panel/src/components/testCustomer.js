import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sideBar';
import DataTable, { createTheme } from 'react-data-table-component';



export default function TestCustomer() {

    createTheme('solarized', {
        text: {
          primary: '#fff',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

    const columns = [
        {
            name:'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name:'email',
            selector: row => row.email
        },
        {
            name:'Age',
            selector: row => row.age,
            sortable: true
        }
    ];
    const data = [
        {
            id: 1,
            name:"raj",
            email:"dcnkjn@gmail.com",
            age:"21"
        },
        {
            id: 2,
            name:"rohan",
            email:"dcnkjn@gmail.com",
            age:"16"
        },
        {
            id: 3,
            name:"jaydeep",
            email:"dcnkjn@gmail.com",
            age:"18"
        },
        {
            id: 4,
            name:"krish",
            email:"dcnkjn@gmail.com",
            age:"20"
        }
    ]
    const [customer, setCustomer] = useState(null);

    useEffect(()=>{
        fetch('https://project-data-8dy4.onrender.com/customer')
        .then((response) => response.json())
        .then((customer) => setCustomer(customer))
    },[])

  return (
    <>
      <SideBar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title"> Manage Customer </h3>
            </div>
            <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Manage Customer</h4>

                    {/* <DataTable id="example"
                        columns={columns}
                        data={data}
                        theme="solarized">
                        
                    </DataTable> */}

                    <div class="table-responsive" id='example'>
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
                                        <td className='text-center'>
                                            <Link><i class="bi bi-trash text-danger"></i></Link> | <Link><i class="bi bi-pencil-square text-success"></i></Link>
                                        </td>
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
