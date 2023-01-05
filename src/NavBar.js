import "./navbar.css"

function NavBar({setCourseTaking}) {
    const toHome = () => {
        setCourseTaking(true)
    }
    return(
        <div className="navbar">
            <img onClick={toHome} className = "home" src="https://freesvg.org/img/1482587631.png"></img>
            <div className="title">John Abbott College Schedule Maker</div>
            <div className="creator">by <a target = {"_blank"} rel="noopener noreferrer" className="linkedIn"href="https://www.linkedin.com/in/william-li-7bb45425b/">William Li</a> © 2023</div>
        </div>
    )
}

export default NavBar