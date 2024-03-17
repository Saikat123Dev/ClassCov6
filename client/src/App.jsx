
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Teacher from './Teacher'

import Component from "./upload"
import Student from "./Student"
import NoteSection from './components/Notes';
import QuizSection from './StudentDashboard/QuizSection';
import Assignments from './StudentDashboard/Assignment';
import AssignmentUpload from './TeacherComponents/AssignmentUpload';


function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/Teach" element={<Teacher/>} />
      <Route path="/uploadAssign" element={<AssignmentUpload/>}/>
      <Route/>
        <Route path="/" element={<Component/>}/>
        <Route path="/Stud" element={<Student/>} />
        <Route path="/notes" element={<NoteSection/>}/>
        <Route path="/quiz" element={<QuizSection/>}/>
        <Route path='/assignment' element={<Assignments/>}/>
        <Route/>
        </Routes>
     
      
    </Router>
  );
}

export default App;
