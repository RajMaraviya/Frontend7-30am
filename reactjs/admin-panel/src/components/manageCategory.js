import React, { useEffect, useState } from 'react';
import SideBar from './sideBar';
import { useNavigate } from 'react-router-dom';

export default function ManageCategory() {

  const [category, setCategory] = useState([]);
  const Navigate = useNavigate();

  

  useEffect(() => {
    getUser();
  }, [])

  //Fetch Categories from db.json
  function getUser() {
    fetch("https://project-data-8dy4.onrender.com/category")
      // .then((response) => response.json())
      // .then((category) => setCategory(category))
      .then((result) => {
        result.json().then((resp) => {
          setCategory(resp)
        })
      })
  }

  // console.log(category)

  // delete category function using (id) perameters
  function deleteCategory(id) {
    fetch(`https://project-data-8dy4.onrender.com/category/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        getUser()
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
              <h3 class="page-title">Manage Category</h3>
            </div>
            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Manage Category ({category.length})</h4>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th className='text-center'> id# </th>
                            <th className='text-center'>Category Name</th>
                            <th className='text-center'>Action</th>

                          </tr>
                        </thead>
                        <tbody>
                          {category && category.map((item) => {
                            return (
                              <tr>
                                <td className='text-center' key={item.id}>{item.id}</td>
                                <td className='text-center text-capitalize' key={item.category}>{item.category}</td>
                                <td className='text-center'>
                                  <button className='btn p-0 m-0' onClick={() => Navigate(`/admin-dashboard/update-category/${item.id}`)}><i class="bi bi-pencil-square text-success"></i></button>
                                  |
                                  <button className='btn p-1 m-0' onClick={() => {if(window.confirm('Delete the item?')){deleteCategory(item.id)};} }><i class="bi bi-trash text-danger"></i></button>
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
