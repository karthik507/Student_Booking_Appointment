import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AdminEdit = () => {
    const navigate=useNavigate();
    const {teachId}=useParams();
    const [id,idChange]=useState('');
    const [name,nameChange]=useState('');
    const [department,departmentChange]=useState('');
    const [subject,subjectChange]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/teacher/'+teachId)
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((res)=>{
            idChange(res.id)
            nameChange(res.name);
            departmentChange(res.department);
            subjectChange(res.subject);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const teachData={
            id,name,department,subject
        };
        fetch("http://localhost:5000/teacher/"+teachId,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(teachData)
        })
        .then((res)=>{
            alert("Saved Succesfully");
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.message);
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
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card' style={{ "textAlign": "left" }}>
                            <div id='spacetitle' className='card-title'>
                                <h2>Teacher Edit Details</h2>
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
                                            <input value={name} onChange={(e)=>{nameChange(e.target.value)}} placeholder='Teacher Name' required className='form-control'></input>
                                        </div>
                                    </div>

                                    <div id='space' className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Department</label>
                                            <input value={department} onChange={(e)=>{departmentChange(e.target.value)}} placeholder='Department Name' required className='form-control'></input>
                                        </div>
                                    </div>

                                    <div id='space' className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Subject</label>
                                            <input value={subject} onChange={(e)=>{subjectChange(e.target.value)}} placeholder='Subject Name' required className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button id='savebtn' className='btn btn-success' type='submit'>Save</button>
                                            <Link id='backbtn' to='/admin' className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AdminEdit