import React, { useState } from 'react'
import { Link, Router, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
const Teacher = () => {
    const [id, idChange] = useState('');
    const [name, nameChange] = useState('');
    const [department, departmentChange] = useState('');
    const [subject, subjectChange] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const teacherData = {
            name, department, subject
        }
        fetch('http://localhost:5000/teacher', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(teacherData)
        })
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
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
            <form className='container' onSubmit={submitHandler}>
                <div className='card' style={{ "textAlign": "left" }}>
                    <div id='spacetitle' className='card-title'>
                        <h2>Teacher Create</h2>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input value={id} disabled='disabled' className='form-control'></input>
                                </div>
                            </div>
                            <div id='space' className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input placeholder='Teacher Name' required value={name} onChange={(e) => { nameChange(e.target.value) }} className='form-control'></input>
                                </div>
                            </div>
                            <div id='space' className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Department</label>
                                    <input placeholder='Department Name' required value={department} onChange={(e) => { departmentChange(e.target.value) }} className='form-control'></input>
                                </div>
                            </div>
                            <div id='space' className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Subject</label>
                                    <input placeholder='Subject Name' required value={subject} onChange={(e) => { subjectChange(e.target.value) }} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button id='savebtn' className='btn btn-success' type="submit">Save</button>
                                    <Link id='backbtn' to="/" className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Teacher