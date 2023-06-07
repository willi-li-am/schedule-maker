import './homePage.css'

function HowTo(){
    return(
        <div className="homePage how">
            <h1>How To Use?</h1>
            <div className = "howToDiv">1. Type in all the courses you plan to take</div>
            <div className = "howToDiv">2. Submit and build your dream schedule</div>
            <h3><br/>Optional</h3>
            <div className = "howToDiv">3. Follow <a className = "link" rel="noopener noreferrer" target={"_blank"} href='https://www.instagram.com/jac.schedule/'>@jac.schedule</a> on Instagram</div>
            <div className = "addBotMargin"></div>
        </div>
    )
}

export default HowTo