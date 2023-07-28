import React, { useState, useEffect } from 'react';
import { Row, Card, Button } from 'react-bootstrap';

export default function ApiCall() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))

    // axios.get("link")
    //   .then((response) => {
    //     setData(response.data)
    //   });

  }, []);






  return (
    <>
      <div className='row mt-5'>
        <div className='col-md-4'>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">A list item
              <span class="badge bg-primary rounded-pill">7</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              A second list item
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              A third list item
              <span class="badge bg-primary rounded-pill">4</span>
            </li>
          </ul>
        </div>
        <div className='col-md-8 border'>
          <div className='row'>

            {data && data.map((item) => {
              return (
                <div className='col-md-4 mt-1'>
                  <div class="card">
                    <img src={item.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h4 class="card-title"><b>Product name :</b> <span>{item.title}</span></h4>
                      <h5><b>Price : </b>{item.price}$</h5>
                      <p><b>Rating :</b>{item.rating.rate} <b>Count :</b> {item.rating.count}</p>
                      <p class="card-text"><b>Description :</b> <span>{item.description}</span></p>
                      <button href="#" class="btn btn-primary">Go somewhere</button>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}
