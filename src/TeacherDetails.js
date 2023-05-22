import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TeacherDetails = () => {
    const [detailData, detailDataChange] = useState(null);
    const [message, messageChange] = useState('');
    const navigate = useNavigate();
    const getDetails = () => {
        fetch("http://localhost:5000/appointment")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                detailDataChange(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    const viewMessage = () => {
        fetch('http://localhost:5000/message')
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        messageChange(json)
                    });
                }
            })
    }
    const cancelAppointment = (id) => {
        fetch('http://localhost:5000/appointment/' + id, {
            method: "DELETE"
        })
            .then((res) => {
                window.alert("Appointment Deleted")
                window.location.reload();
            })
    }
    const submitAppointment = () => {
        window.alert("Appointment Submited Successfully")
    }
    const ApproveAppointment = () => {
        alert("Appointment Approved")
    }
    return (
        <div>
            
            <nav class="navbar navbar-dark bg-dark  ">
                <span class="navbar-brand mb-0 h1">Booking Appointment</span>
                <Link to='/teacher/login' style={{marginRight:"20px"}} className='btn btn-danger'>Logout</Link>
            </nav>

            <div className='container'><br></br>
                <button className='btn btn-primary' onClick={getDetails}>View Appointments</button><br></br><br></br>
                <div className='card'>
                    <div className='card-title'>
                        <h2>Approve Appointment</h2>
                    </div>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>Student Name</td>
                                    <td>Book Name</td>
                                    <td>Date</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    detailData &&
                                    detailData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.studentname}</td>
                                            <td>{item.bookname}</td>
                                            <td>{item.date}</td>
                                            <button id='savebtn' onClick={ApproveAppointment} className='btn btn-success'>Approve</button>
                                            <button id='backbtn' onClick={() => { cancelAppointment(item.id) }} className='btn btn-danger'>Cancel</button>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <button className='btn btn-primary' onClick={viewMessage}>View Messages</button><br></br><br></br>
                <table className='table table-bordered'>
                    <tbody className='bg-dark text-white'>
                        {
                            message &&
                            message.map((s) => (
                                <tr key={s.id}>
                                    <td>{s.message}</td>
                                    <td>{s.messageDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table><hr></hr>
                <div>
                    <h2>Appointment Shedule</h2>
                    <label className='label'>Date</label>
                    <input className='input' type='date'></input><br></br><br></br>
                    <label className='label'>Book Name Select</label>
                    <select className='input'>
                        <option>Data structures</option>
                        <option>Data Science</option>
                        <option>Machine Learning</option>
                        <option>IOT</option>
                        <option>Operating System</option>
                    </select><br></br><br></br>
                    <button onClick={submitAppointment} className='btn btn-success'>Submit</button>
                </div><br></br><hr></hr>
                
            </div>

        </div>

    )
}

export default TeacherDetails