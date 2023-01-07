import './schedule.css'

function Schedule ({fullSchedule, setUpdate, update, colorList}) {
   
    const timeToHeight = {
        "0800":0,
        "0850":1,
        "0900":2,
        "0950":3,
        "1000":4,
        "1050":5,
        "1100":6,
        "1150":7,
        "1200":8,
        "1250":9,
        "1300":10,
        "1350":11,
        "1400":12,
        "1450":13,
        "1500":14,
        "1550":15,
        "1600":16,
        "1650":17,
        "1700":18,
        "1750":19
    }

    const dayToNumber = {
        "M":0,
        "T":1,
        "W":2,
        "R":3,
        "F":4
    }

    let scheduleList = [[],[],[],[],[]]


    for(const day in fullSchedule){
        for(let i = 0; i < fullSchedule[day].length; i++){
            let dayN = dayToNumber[day]
            let schedule = fullSchedule[day][i]
            scheduleList[dayN].push(schedule)
        }
    }

    const styleBox = (day, time) => {
        let timeList = time
        if(time[0][2] === '3'){
            timeList[0] = time[0][0] + time[0][1] + "50" 
        }
        if(time[1][2] === '3'){
            timeList[1] = time[1][0] + time[1][1] + "50" 
        }
        let height = ((timeList[1]-timeList[0])/50) - 1
        let startHeight = timeToHeight[time[0]]
        let style = {
            position: "absolute",
            backgroundColor: colorList[time[3]],
            width: 190+"px",
            height: (29.4 + (height * (31.4))) + "px",
            marginTop: ((startHeight * 31.4) + 61)+"px",
            marginLeft:  (74 + (day*192)) + "px",
            borderTop: "2px solid black",
            borderBottom: "2px solid black"
        }
        if(time[0][2] === '5'){
            time[0] = time[0][0] + time[0][1] + "30" 
        }
        if(time[1][2] === '5'){
            time[1] = time[1][0] + time[1][1] + "30" 
        }
        return style
    }

    return(
        <div className='schedule'>
            <div className='table'>
                <div className='weekday'>
                    <div className='time'>
                    </div>
                    <div className='day'>Monday</div><div className='day'>Tuesday</div><div className='day'>Wednesday</div>
                    <div className='day'>Thursday</div><div className='day'>Friday</div>
                </div>
                <div className='column'>
                    <div className='timeColumn'>
                        <div className='timeSlot top'>8:30</div>
                        <div className='timeSlot'>9:00</div>
                        <div className='timeSlot'>9:30</div>
                        <div className='timeSlot'>10:00</div>
                        <div className='timeSlot'>10:30</div>
                        <div className='timeSlot'>11:00</div>
                        <div className='timeSlot'>11:30</div>
                        <div className='timeSlot'>12:00</div>
                        <div className='timeSlot'>12:30</div>
                        <div className='timeSlot'>13:00</div>
                        <div className='timeSlot'>13:30</div>
                        <div className='timeSlot'>14:00</div>
                        <div className='timeSlot'>14:30</div>
                        <div className='timeSlot'>15:00</div>
                        <div className='timeSlot'>15:30</div>
                        <div className='timeSlot'>16:00</div>
                        <div className='timeSlot'>16:30</div>
                        <div className='timeSlot'>17:00</div>
                        <div className='timeSlot bot'>17:30</div>
                    </div>
                    <div className='dayColumn'>
                        <div className = "daySlot top"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot bot"></div>
                    </div>
                    <div className='dayColumn'>
                        <div className = "daySlot top"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot bot"></div>
                    </div>
                    <div className='dayColumn'>
                        <div className = "daySlot top"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot bot"></div>
                    </div>
                    <div className='dayColumn'>
                        <div className = "daySlot top"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot bot"></div>
                    </div>
                    <div className='dayColumn'>
                        <div className = "daySlot top"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot"></div>
                        <div className = "daySlot bot"></div>
                    </div>
                </div>
                    {scheduleList.map((schedule, day) => {
                        return(
                            <> 
                                {schedule.map((time) => {
                                    const styling = styleBox(day, time)
                                    return(<div key = {day+time} style={styling}>
                                        <div className="textBox">{time[3]}<br/>{time[2]["teacher"]}<br/>{time[2]["section"]}</div>
                                    </div>)
                                })}
                            </>
                        )
                    })}
            </div>
        </div>
    )
}

export default Schedule