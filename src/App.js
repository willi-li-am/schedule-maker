import './App.css';
import {useState} from 'react'
import NavBar from './NavBar';
import CourseInput from './courseInput';
import CourseList from './CourseList'
import HomePage from './homePage.js'
import Schedule from './schedule';
import classList from './classList_by_course.json'

function App() {
  const [inputFields, setInputFields] = useState([
    {course: ""}, {course: ""}, {course: ""}, {course: ""}, {course: ""}
  ])
  const [fullSchedule, setFullSchedule] = useState({
    "M": [],
    "T": [],
    "W": [],
    "R": [],
    "F": []
  })
  const [courseTaking, setCourseTaking] = useState(true)
  const [courseList, setCourseList] = useState()
  const [coursePicked, setCoursePicked] = useState({})
  const [update, setUpdate] = useState(false)
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
      <CourseList courseList = {courseList} coursePicked = {coursePicked} setCoursePicked={setCoursePicked} fullSchedule = {fullSchedule} setFullSchedule = {setFullSchedule} setUpdate={setUpdate} update={update}/>
      <Schedule fullSchedule={fullSchedule} setUpdate={setUpdate} update={update}/>
    </div>
    </>)
  }
}

export default App;

//add color wheel next to course input
//Make it make the schedule
//make it remove if deleted courseList
//Find a good way to make the schedule thing (grid)