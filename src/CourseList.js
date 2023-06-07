import classList from "./final_results.json"
import "./App.css"
import {useState} from 'react'

function CourseList({courseList, coursePicked, setCoursePicked, fullSchedule, setFullSchedule, colorList, setColorList, updateApp, setUpdateApp}){
    const [expanded, setExpanded] = useState({})
    const [update, setUpdate] = useState(false)

    const colors = ["#00EBFF", "#FF8000", "#35FF00", "#0067FF", "#BE00FF", "#FF0004", "#E8FF00", "#F400FF","#0079FF", "#B2FF00", "#00EBFF", "#FF8000", "#35FF00", "#0067FF", "#BE00FF", "#FF0004", "#E8FF00", "#F400FF","#0079FF", "#B2FF00"]
    let colorL = colorList
    for(const classes in coursePicked) {
        if(!(courseList.includes(classes))){
            delete colorL[classes]
            let course = coursePicked[classes]
            let schedule = course['schedule']
            for(const day in schedule) {
                if(schedule[day] !== ""){
                    let time = schedule[day].split("-")
                    time.push(course)
                    let fullScheduleList = fullSchedule
                    for(let i = 0; i < fullScheduleList[day].length; i++){
                        if(time[2] === fullScheduleList[day][i][2]){
                            fullScheduleList[day].splice(i, 1)
                            break
                        }
                    }
                    setFullSchedule(fullScheduleList)
                }
            }
            let coursePickedList = coursePicked
            delete coursePickedList[classes]
            setCoursePicked(coursePickedList)
            setColorList(colorL)
        }
    }
    for(let i = 0; i < courseList.length; i++) {
        let color = colors[i]
        colorL[courseList[i]] = color
        setColorList(colorL)
    }

    const doesFit = (schedule) => {
        for(const day in schedule) {
            let time = schedule[day].split("-")
            let full = fullSchedule[day]
            for(let i = 0; i < full.length; i++){
                if((time[0] >= full[i][0])&&(time[0] < full[i][1])){ //Start must not be in between time interval, but can start at end of class
                    console.log(time[0]+", "+time[1])
                    console.log(full[i][0]+", "+full[i][1])
                    return false
                }if ((time[1] > full[i][0])&&(time[1] <= full[i][1])) { //End must not be end anywhere in time interval, but can end at start of class
                    console.log(time[0]+", "+time[1])
                    console.log(full[i][0]+", "+full[i][1])
                    return false
                }if((time[0]<= full[i][0])&&(time[1]>full[i][0])){ //Can't start before class and end after class
                    console.log(time[0]+", "+time[1])
                    console.log(full[i][0]+", "+full[i][1])
                    return false
                }
            }
        }
        return true
    }

    const scheduleToFull = (course, remove, code) => {
        let schedule = course['schedule']
        if(!remove) {
            for(const day in schedule) {
                if(schedule[day] !== ""){
                    let time = schedule[day].split("-")
                    time.push(course)
                    time.push(code)
                    let fullScheduleList = fullSchedule
                    fullScheduleList[day].push(time)
                    setFullSchedule(fullScheduleList)
                }
            }
        }else{
            for(const day in schedule) {
                if(schedule[day] !== ""){
                    let time = schedule[day].split("-")
                    time.push(course)
                    time.push(code)
                    let fullScheduleList = fullSchedule
                    for(let i = 0; i < fullScheduleList[day].length; i++){
                        if(time[2] === fullScheduleList[day][i][2]){
                            fullScheduleList[day].splice(i, 1)
                            break
                        }
                    }
                    setFullSchedule(fullScheduleList)
                }
            }
        }
    }


    const accordion = (course) => {
        if(course in expanded){
            let expandedList = expanded
            expandedList[course] = !expandedList[course]
            setExpanded(expandedList)
            setUpdate(!update)
            setUpdateApp(!updateApp)
        }else {
            let expandedList = expanded
            expandedList[course] = true
            setExpanded(expandedList)
            setUpdate(!update)
            setUpdateApp(!updateApp)
        }
    }
    const pick = (index, course) => {
        if(course in coursePicked){
            if(classList[course][index] === coursePicked[course]){
                let picked = coursePicked
                scheduleToFull(picked[course], true, course)
                delete picked[course]
                setCoursePicked(picked)
                if(expanded[course] === true){
                    accordion(course)
                }
                setUpdateApp(!updateApp)
            } else{
                let picked = coursePicked
                picked[course] = classList[course][index]
                setCoursePicked(picked)
                scheduleToFull(picked[course], false, course)
                accordion(course)
                setUpdateApp(!updateApp)
            }
        } else{
            let picked = coursePicked
            picked[course] = classList[course][index]
            setCoursePicked(picked)
            scheduleToFull(picked[course], false, course)
            accordion(course)
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
                if(expanded[x]!== true){if(x in coursePicked){
                    if(classes === coursePicked[x])
                    {if(!("teacher" in classes["lab"]) || classes['lab']['teacher'] === classes['teacher']) {
                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        

                    }
                    else {

                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                       
                    }}

                else{
                    if(!("teacher" in classes["lab"]) || classes['lab']['teacher'] === classes['teacher']) {

                            return(
                                <div className='courseBoxInvalid' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                    } else{

                            return(
                                <div className='courseBoxInvalid' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                    }
                }
                } else if(!doesFit(classes["schedule"])){
                    if(!("teacher" in classes["lab"]) || classes['lab']['teacher'] === classes['teacher']) {
                            return(
                                <div className='courseBoxInvalid' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                    } else{
                            return(
                                <div className='courseBoxInvalid' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                    }
                } else{
                    if(!("teacher" in classes["lab"]) || classes['lab']['teacher'] === classes['teacher']) {

                            return(
                                <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                            )
                        
                    } else{
                        return(
                            <div onClick={() => pick(jindex, x)} className='courseBox' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<PrintSchedule key={jindex} classes={classes}/></div>
                        )
                    }
                }}
                if((expanded[x] === true) && (x in coursePicked)){
                    if(classes === coursePicked[x])
                    {if(!("teacher" in classes["lab"]) || classes['lab']['teacher'] === classes['teacher']) {

                        return(
                            <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<PrintSchedule key={jindex} classes={classes}/></div>
                        )
                        
                    }
                    else {
                        return(
                            <div onClick={() => pick(jindex, x)} className='courseBoxSelected' key={jindex}>{classes["teacher"]}<br/>{classes["title"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<br/>Section: {classes["section"]}<br/>Lab: {classes["lab"]["teacher"]}<br/>{classes["rating"] !== "DNE" ? <>Rating: {classes["rating"]["rating"]}/5 {classes["rating"]["reviews"]} reviews </> : <>Rating DNE</>}<PrintSchedule key={jindex} classes={classes}/></div>
                        )
                    }}
                }
            })}
            </>
        )
      })
      }</div>
}

export default CourseList