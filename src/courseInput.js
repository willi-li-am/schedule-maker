import classList from "./classList_by_course.json"

function CourseInput({setCourseList, setCourseTaking, setInputFields, inputFields}) {

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = () => {
        let newField = {course:""}
        setInputFields([...inputFields, newField])
    }
    const removeFields = (index) => {
        let data = [...inputFields]
        if(data.length === 1){
            setInputFields([{course:""}])
        }
        else{
            data.splice(index, 1)
            setInputFields(data)
        }
    }
    const submit = () => {
        let isEmpty = false
        let wrongCourse = []
        let courseList = []
        let duplicate = []
        for(let i = 0; i < inputFields.length; i++){
            if(inputFields[i].course === ""){
                isEmpty = true
            }
            if(!((inputFields[i].course.replace(/\s+/g, '')).toUpperCase() in classList)){
                wrongCourse.push(inputFields[i].course)
            }
            if(courseList.includes(inputFields[i].course.replace(/\s+/g, ''))){
                duplicate.push(inputFields[i].course.replace(/\s+/g, ''))
            }
            courseList.push((inputFields[i].course.replace(/\s+/g, '')).toUpperCase())
        }
        if(isEmpty){
            alert("One or more cases are empty")
        }
        else if(wrongCourse.length !== 0){
            if(wrongCourse.length !== 1){
            alert(wrongCourse + " are not real courses\nPlease write it in format: XXX-XXX-XX or make sure it is written correctly")
            }
            else alert(wrongCourse + " is not a real course\nPlease write it in format: XXX-XXX-XX or make sure it is written correctly")
        }
        else if(duplicate.length !== 0){
            alert("Please remove duplicate courses")
        }
        else{
            setCourseTaking(false)
        }
        setCourseList(courseList)
    }
    return(
        <div className = "courseInputBoxAll">
        <div className='courseInputBox'>
        <div className="courseInputTitle">Courses</div>
          {inputFields.map((input, index) =>
          {
            return (
              <div className='courseInputDuo' key = {index}>
                <input className="courseInput"
                name = 'course' 
                placeholder = "Course Code"
                value = {input.course}
                onChange={event => handleFormChange(index, event)}
                autoComplete="off"></input>
                <button className = "courseRemoveBtn"onClick = {()=>removeFields(index)}>X</button>
              </div>
            )
          }
          )}
        <button className="addCourseBtn" onClick = {addFields}>+ Add course</button>
        <button className = "submitBtn"onClick={submit}>Submit</button>
        </div>
        </div>
    )
}

export default CourseInput