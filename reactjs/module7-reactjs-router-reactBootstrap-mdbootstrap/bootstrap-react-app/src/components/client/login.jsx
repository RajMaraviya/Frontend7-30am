import React from "react";
import Modal from 'react-bootstrap/Modal';

function Login()
{
    return(
        <>
            <div className="modal fade" id="loginModal" role="dialog" data-bd-dismiss="modal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Login</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="inputUserName">Username</label>
                                    <input className="form-control" placeholder="Login Username" type="text" id="inputUserName" />
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input className="form-control" placeholder="Login Password" type="password" id="inputPassword" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer"> <button type="submit" className="btn btn-primary">Login</button>
                            <button id="btnHideModal" type="button" className="btn btn-primary" data-dismiss="modal">Close</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;