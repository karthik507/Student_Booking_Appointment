import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const StudentDetails = () => {
    const [studentname,studentnameChange]=useState('');
    const [bookname,booknameChange]=useState('');
    const [date,dateChange]=useState('');
    const [message,messageChange]=useState('');
    const [messageDate,messageDateChange]=useState('');
    const [teachername,teachernameChange]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={
            studentname,bookname,date
        }

        fetch("http://localhost:5000/appointment",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(studentData)
        })
        .then((res)=>{
            console.log(res)
            alert("Appointment Booked Successfully !")
            return res.json();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleSubmitMessage=(e)=>{
        e.preventDefault();
        const msgData={
            message,messageDate
        }
        fetch('http://localhost:5000/message',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(msgData)
        })
        .then((res)=>{
            alert("Message Sent Successfully !")
            console.log(res);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    var resName,resDepartment,resSubject;
    const searchTeacher=(e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/teacher")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            res.map((i)=>{
                resName=i.name;
                resDepartment=i.department;
                resSubject=i.subject
            })
            if(resName===teachername){
                alert(`Teacher Name Found " Department Name is : ${resDepartment} and Course Name is : ${resSubject}"`)
            }
            else{
                alert("Teacher Name not Found ! ")
            }
        })
        // .then((res)=>{
        //     if(res.name===teachername){
        //         console.log("matched")
        //     }
        //     else{
        //         console.log("not Matched")
        //     }
        // })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <nav className="navbar navbar-dark bg-dark  ">
                <span class="navbar-brand mb-0 h1">Booking Appointment</span>
                <form onSubmit={searchTeacher}  class="d-flex" role="search">
                    <input value={teachername} onChange={(e)=>{teachernameChange(e.target.value)}} class="form-control me-2" type="search" placeholder="Search Teacher" aria-label="Search"></input>
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
                <Link to='/student' style={{marginRight:"20px"}} className='btn btn-danger'>Logout</Link>
            </nav>

        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='card'>

                    <div className='card-title'>
                        <h1>Book Appointment</h1>
                    </div>

                    <div className='card-body'>
                        <div className='row'>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <label>Student Name</label>
                                <input value={studentname} onChange={(e)=>{studentnameChange(e.target.value)}} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <label>Book Name</label>
                                <input value={bookname} onChange={(e)=>{booknameChange(e.target.value)}} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <label>date</label>
                                <input value={date} onChange={(e)=>{dateChange(e.target.value)}} placeholder='DD/MM/YYYY' className='form-control'></input>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='card-footer'>
                        <button id='savebtn' type='submit' className='btn btn-primary'>Add</button>
                    </div>

                </div>
            </form>
        </div><hr></hr>

        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmitMessage}>
                <div className='card'>

                    <div className='card-title'>
                        <h1>Send Message</h1>
                    </div>

                    <div className='card-body'>
                        <div className='row'>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <label>Message</label>
                                <input value={message} onChange={(e)=>{messageChange(e.target.value)}} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <label>Date</label>
                                <input value={messageDate} placeholder='DD/MMYYY' onChange={(e)=>{messageDateChange(e.target.value)}} className='form-control'></input>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='card-footer'>
                        <button id='savebtn' type='submit' className='btn btn-primary'>Submit</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
  )
}

export default StudentDetails