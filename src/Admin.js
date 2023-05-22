import React, { useEffect, useState } from 'react'
import { Link, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import AdminEdit from './AdminEdit';

const Admin = () => {
    const [teachData, teachDataChange] = useState(null);
    const navigate = useNavigate();
    const removeDetails = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            fetch("http://localhost:5000/teacher/" + id, {
                method: "DELETE"
            })
        }
    }
    const editDetails = (id) => {
        navigate("/admin/adminEdit/" + id)
    }
    useEffect(() => {
        fetch('http://localhost:5000/teacher')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                teachDataChange(res);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className='container'>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Booking Appointment
                    </a>
                </div>
            </nav>
            <div className='card'>
                <div className='card-title'>
                    <h2>Teacher list</h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to='/teacher' className='btn btn-success'>Add Teacher</Link>
                    </div>
                    <br></br>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Subject</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teachData &&
                                teachData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.department}</td>
                                        <td>{item.subject}</td>
                                        <td>
                                            <a id='updatebtn' onClick={() => { editDetails(item.id) }} className='btn btn-success'>Update</a>
                                            <a id='removebtn' onClick={() => { removeDetails(item.id) }} className='btn btn-danger'>Remove</a>
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div><br></br>
            <Link to='/student' className='btn btn-success'>Approve Registred Student</Link>
            
        </div>
    )
}

export default Admin