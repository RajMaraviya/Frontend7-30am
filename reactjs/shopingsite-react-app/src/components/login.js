import React from 'react';
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <>
            <div class="col-md-4 mx-auto mt-5 grid-margin stretch-card">
                <div class="card-body mt-3">
                    <h2 class="card-description">Login</h2>
                    <form class="forms-sample mt-5">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control text-white" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control text-white" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-check form-check-flat form-check-primary">
                                <input type="checkbox" class="form-check-input bg-transparent border-white" />Remember
                        </div>
                        <button type="submit" class="btn btn-primary mt-1">Login</button><br />
                        <Link to="/admin-register" className=''>New user? Create an account</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
