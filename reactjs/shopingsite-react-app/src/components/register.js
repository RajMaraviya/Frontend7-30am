import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <div class="col-md-4 mx-auto mt-5 grid-margin stretch-card">
                <div class="card-body mt-3">
                    <h2 class="card-description">Register</h2>
                    <form class="forms-sample mt-5">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control text-white" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1">Mobile No.</label>
                            <input type="text" maxlength="10" class="form-control text-white" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control text-white" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputConfirmPassword1">Confirm Password</label>
                            <input type="password" class="form-control text-white" id="exampleInputConfirmPassword1" placeholder="Password" />
                        </div>
                        <div class="form-check form-check-flat form-check-primary">
                                <input type="checkbox" class="form-check-input bg-transparent border-white" />Remember
                        </div>
                        <button type="submit" class="btn btn-primary me-2"><Link to="/" className='text-decoration-none text-white'>Register</Link></button>
                        <button class="btn btn-dark" type='reset'>Cancel</button><br />
                        <Link to="/admin-login" className=''>Existing User? Log in</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
