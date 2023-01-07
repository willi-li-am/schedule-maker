import './schedule.css'

function Schedule ({fullSchedule, setUpdate, update}) {
    let teacherList = []
    console.log(fullSchedule)
    for(const day in fullSchedule){
        for(let i = 0; i < fullSchedule[day].length; i++){
            console.log(fullSchedule[day][i][2]['teacher'])
            let teacher = fullSchedule[day][i][2]['teacher']
            teacherList.push(teacher)
        }
    }
    return(
        <div className='testGroup'>
        <div className='shit'>If you're reading this, the space here is supposed to have your schedule, but I'm still working on that as you can see,<br/>
        so here's all the teachers you picked (duplicated)!</div>
        {teacherList.map((teacher) => {
            return(
                <div className="test">{teacher}</div>
            )
        })}
        </div>
    )
}

export default Schedule