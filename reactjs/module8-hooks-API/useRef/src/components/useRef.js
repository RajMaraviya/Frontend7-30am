import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function Useref() {

    const name=useRef("");
    const email=useRef("");
    const mobile=useRef("");
    const subject=useRef("");
    const message=useRef("");

    const AddcontactHandler=()=>{

        var insert = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            subject: subject.current.value,
            message: message.current.value,
        }

        //call api to add from http://localhost:4000/contact

        axios.post("http://localhost:4000/contact", insert)
        .then(()=>{
            alert('contact back you soon')
        });
    }

    return (
        <>
            <div className='row p-2 border shadow m-2 rounded'>
                <div className='col-md-4'>
                    <div className='w-100 h-100 border rounded'>
                        <h1 className='m-3'>Contact Us</h1>
                    </div>
                </div>
                <div className='col-md-8'>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" ref={name} />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" ref={email} />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlSelect2">Mobile</label>
                            <input type="number" className="form-control" placeholder="Enter your mobile number" ref={mobile} />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Subject</label>
                            <input type="text" className="form-control" placeholder="Enter subject" ref={subject} />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" rows="3" ref={message}></textarea>
                        </div>

                        <button type='button' className='btn btn-dark' onClick={AddcontactHandler}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
