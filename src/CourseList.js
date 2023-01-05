import classList from "./classList_by_course.json"
import "./App.css"
import {useState} from 'react'

function CourseList({courseList, coursePicked, setCoursePicked}){
    const [update, setUpdate] = useState(false)
    const [expanded, setExpanded] = useState({})

    const accordion = (course) => {
        if(course in expanded){
            let expandedList = expanded
            expandedList[course] = !expandedList[course]
            setExpanded(expandedList)
            setUpdate(!update)
        }else {
            let expandedList = expanded
            expandedList[course] = true
            setExpanded(expandedList)
            setUpdate(!update)
        }
    }
    const pick = (index, course) => {
        if(course in coursePicked){
            if(classList[course][index] === coursePicked[course]){
                let picked = coursePicked
                delete picked[course]
                setCoursePicked(picked)
                setUpdate(!update)
            } else{
                let picked = coursePicked
                picked[course] = classList[course][index]
                setCoursePicked(picked)
                setUpdate(!update)
            }
        } else{
            let picked = coursePicked
            picked[course] = classList[course][index]
            setCoursePicked(picked)
            setUpdate(!update)
        }
    }
    const PrintSchedule = (classes) => {
        let schedule = []
        if(classes["classes"]["schedule"]["M"] !== ""){
          schedule.push("Monday: " + classes["classes"]["schedule"]["M"])
        }
        if(classes["classes"]["schedule"]["T"] !== ""){
          schedule.push("Tuesday: " + classes["classes"]["schedule"]["T"])
        }
        if(classes["classes"]["schedule"]["W"] !== ""){
          schedule.push("Wednesday: " + classes["classes"]["schedule"]["W"])
        }
        if(classes["classes"]["schedule"]["R"] !== ""){
          schedule.push("Thursday: " + classes["classes"]["schedule"]["R"])
        }
        if(classes["classes"]["schedule"]["F"] !== ""){
          schedule.push("Friday: " + classes["classes"]["schedule"]["F"])
        }
        return(
          <>
          {schedule.map((day, index) => {
            return(
              <div className = "timeSchedule" key={index+classes["classes"]["teacher"]+classes["classes"]["section"]}>{day}</div>
            )
          })}
          </>
        )
    }
    return <div key = "courseList" className="courseList">{courseList.map((x, index) => {
        return(
            <>
            <div className="courseTitleDuo">
                <div onClick={() => accordion(x)} className = {"courseTitle"} key = {index+"title"}>{x}<div className="expand">{expanded[x] ? "+":"−"}</div></div>
            </div>
            {classList[x].map((classes, jindex) => {
                if(expanded[x]!== true){if(classes != coursePicked[x]){
                    if(classes['lab'] === "" || classes['lab']['teacher'] === classes['teacher']) {
                        if(classes['extra'] === ""){
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        }
                        else{
                            let extra = classes['extra'].split(" ")
                            if(extra[0].match(/[A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9]/)){
                                return(
                                    <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                                )
                            }
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/><div className="extra">{classes['extra']}</div></div>
                            )
                        }
                    } else{
                        if(classes['extra'] === ""){
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        }
                        else{
                            let extra = classes['extra'].split(" ")
                            if(extra[0].match(/[A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9]/)){
                                return(
                                    <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/></div>
                                )
                            }
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/><div className="extra">{classes['extra']}</div></div>
                            )
                        }
                    }
                } else{
                    if(classes['lab'] === "" || classes['lab']['teacher'] === classes['teacher']) {
                        if(classes['extra'] === ""){
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        }
                        else{
                            let extra = classes['extra'].split(" ")
                            if(extra[0].match(/[A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9]/)){
                                return(
                                    <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                                )
                            }
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/><div className="extra">{classes['extra']}</div></div>
                            )
                        }
                    }
                    else {
                        if(classes['extra'] === ""){
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        }
                        else{
                            let extra = classes['extra'].split(" ")
                            if(extra[0].match(/[A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9][A-Z0-9][-][A-Z0-9][A-Z0-9]/)){
                                return(
                                    <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/></div>
                                )
                            }
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>Rating: {Math.round(classes["rating"] * 10) / 10}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>Rating: {Math.round(classes["lab"]["rating"]*10)/10}<PrintSchedule key={jindex} classes={classes}/><div className="extra">{classes['extra']}</div></div>
                            )
                        }
                    }
                }}
            })}
            </>
        )
      })
      }</div>
}

export default CourseList