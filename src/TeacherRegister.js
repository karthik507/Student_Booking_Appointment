import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TeacherRegister = () => {
    const [id,idChange]=useState('');
    const [password,passwordChange]=useState('');
    const [name,nameChange]=useState('');
    const [email,emailChange]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const teacherRegisterData={
            id,password,name,email
        }
        fetch("http://localhost:5000/teacherRegister",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(teacherRegisterData)
        })
        .then((res)=>{
            window.alert("Registered Successfully");
            navigate("/teacher/login")
        })
    }
  return (
    <div className='offset-lg-3 col-lg-6'>
        <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Booking Appointment
                    </a>
                </div>
            </nav><br></br><br></br><br></br>
        <form className='container' onSubmit={handleSubmit}>
            <div className='card'>
            <div className='card-header'>
                <h1>Teacher Registration</h1>
            </div>
            <div className='card-body'>
                <div className='row'>

                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>User Name</label>
                            <input value={id} onChange={(e)=>{idChange(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Password</label>
                            <input value={password} onChange={(e)=>{passwordChange(e.target.value)}} type='password' className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Full Name</label>
                            <input value={name} onChange={(e)=>{nameChange(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input value={email} onChange={(e)=>{emailChange(e.target.value)}} type='email' className='form-control'></input>
                        </div>
                    </div>

                </div>
            </div>
            <div className='card-footer'>
                <button id='savebtn' type='submit' className='btn btn-primary'>Register</button>
                <Link id='backbtn' to='/' className='btn btn-danger'>Back</Link>
            </div>

            </div>
        </form>
    </div>
  )
}

export default TeacherRegister