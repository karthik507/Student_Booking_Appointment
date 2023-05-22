import React from "react";
import { Link, Router, Routes, Route, BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Booking Appointment
          </a>
        </div>
      </nav><br></br><br></br><br></br>
      <div> <h2>Welcome to Student Teacher Booking Appointment 🙏</h2> </div>
      <div class='homediv'>
        <Link to='/admin' className='btn btn-primary'>Admin</Link>
        <Link to='/teacher' ></Link>
        <Link to='/teacher/login' className="btn btn-primary">Teacher Login</Link><br></br>
        <Link to='/student' className='btn btn-primary'>Student</Link>
      </div>
      <footer className="footertag">
        <p> Student Teacher Booking Webiste Copyright &copy; 2023 booking,Inc. </p>
        <p><a href="mailto:studetn_teacher_booking.com">Booking@mail.com</a></p>
      </footer>
    </div>
  );
};

export default Home;
