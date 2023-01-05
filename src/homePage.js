import './homePage.css'

function HomePage(){
    return(
        <div className="homePage">
            <h1>JAC course picker</h1>
            <div className='homeDiv'>To use this schedule maker, insert all of your courses that you will be taking in the course code box
                 and click submit once done</div>
            <div className='homeDiv'>Any questions or problems? Contact me on Instagram <a className='link' rel="noopener noreferrer" target={"_blank"} href='https://www.instagram.com/w.liam.li/'>@w.liam.li</a></div>
            <div className='homeDiv'>Disclaimer! This website is not affiliated in any sort of way with John Abbott College</div>
        </div>
    )
}

export default HomePage