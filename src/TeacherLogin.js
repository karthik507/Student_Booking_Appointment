import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const TeacherLogin = () => {
    const [username, usernameChange] = useState('');
    const [password, passwordChange] = useState('');
    const navigate = useNavigate();
    const proceedLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/teacherRegister/" + username)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.password === password && res.id === username) {
                    navigate("/teacherDetails")
                }
                else {
                    alert("invalid username and password")
                }
            })
    }
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Booking Appointment
                    </a>
                </div>
            </nav><br></br><br></br><br></br>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='contianer' onSubmit={proceedLogin}>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>Teacher Login</h2>
                            </div>
                            <div className='card-body'>

                                <div className='form-group'>
                                    <label>User Name</label>
                                    <input value={username} onChange={(e) => { usernameChange(e.target.value) }} className='form-control' ></input>
                                </div>

                                <div className='form-group'>
                                    <label>Password</label>
                                    <input value={password} onChange={(e) => { passwordChange(e.target.value) }} type='password' className='form-control' ></input>
                                </div>

                            </div>
                            <div className='card-footer'>
                                <button id='savebtn' type='submit' className='btn btn-primary'>Login</button>
                                <Link id='backbtn' className='btn btn-success' to='/teacherRegister'>New User</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default TeacherLogin