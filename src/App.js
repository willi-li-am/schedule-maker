import './App.css';
import {useState} from 'react'
import NavBar from './NavBar';
import CourseInput from './courseInput';
import CourseList from './CourseList'
import HomePage from './homePage.js'
import classList from './classList_by_course.json'

function App() {
  const [inputFields, setInputFields] = useState([
    {course: ""}, {course: ""}, {course: ""}, {course: ""}, {course: ""}
  ])
  const [courseTaking, setCourseTaking] = useState(true)
  const [courseList, setCourseList] = useState()
  const [coursePicked, setCoursePicked] = useState({})
  if(courseTaking){
    return (
      <div className='mainPage'>  
        <NavBar setCourseTaking={setCourseTaking}/>
        <HomePage/>
        <CourseInput inputFields = {inputFields} setInputFields={setInputFields} setCourseTaking={setCourseTaking} setCourseList={setCourseList}/>
      </div>
    );
  } else if (!courseTaking){
    return (
    <>
    <NavBar setCourseTaking={setCourseTaking}/>
    <div className = "app">
      <CourseList courseList = {courseList} coursePicked = {coursePicked} setCoursePicked={setCoursePicked}/>
      <iframe style={{"border-radius":"12px", "width":"500px", "marginTop":"200px", "marginLeft":"350px"}} src="https://open.spotify.com/embed/album/1WVIJaAboRSwJOe4u0n0Q7?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </>)
  }
}

export default App;

//Make it make the schedule
//Find a good way to make the schedule thing (grid)