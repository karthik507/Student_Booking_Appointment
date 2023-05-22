import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Link, Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Admin from './Admin';
import Teacher from './Teacher';
import Student from './Student';
import AdminEdit from './AdminEdit';
import TeacherLogin from './TeacherLogin';
import TeacherRegister from './TeacherRegister';
import TeacherDetails from './TeacherDetails';
import StudentDetails from './StudentDetails';
import StudentRegister from './StudentRegister';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/teacher' element={<Teacher></Teacher>}></Route>
          <Route path='/student' element={<Student></Student>}></Route>
          <Route path='/admin/adminEdit/:teachId' element={<AdminEdit></AdminEdit>}></Route>
          <Route path='/teacher/login' element={<TeacherLogin></TeacherLogin>}></Route>
          <Route path='/teacherRegister' element={<TeacherRegister></TeacherRegister>}></Route>
          <Route path='/teacherDetails' element={<TeacherDetails></TeacherDetails>}></Route>
          <Route path='/studentDetails' element={<StudentDetails></StudentDetails>}></Route>
          <Route path='/studentRegister' element={<StudentRegister> </StudentRegister>}></Route>
        </Routes>
      </BrowserRouter>
      <footer className="footertag">
        <p> Student Teacher Booking Webiste Copyright &copy; 2023 booking,Inc. </p>
        <p><a href="mailto:studetn_teacher_booking.com">Booking@mail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
