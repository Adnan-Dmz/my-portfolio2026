import { Link } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useContext } from "react"
import { StyleContext } from "../usehook/createcontext"
import "./Nav.css"
import logolight from '../icon/logolight.svg'
import logodark from '../icon/logodark.svg'
const Nav = () => {
    const { isLight, toggleTheme, isPersian, toggleLanguage } = useContext(StyleContext)
    return (
        <header className="fheader">
            <div className={`header ${isLight ? "header-light" : "header-dark"}`}>
                <div className="">
                    {isLight ? <img src={logolight} alt="Adnan Damizadeh" />
                        : <img src={logodark} alt="Adnan Damizadeh" />
                    }
                </div>
                <div className={`headerlinkdiv ${isLight ? "headerlinkdiv-light" : "headerlinkdiv-dark"}`}>
                    <div className="divlinkunderline">
                        <Link to={"/"} className="headerlink ">{isPersian ? "خانه" : "Home"}</Link>
                        <div className={`divdivunderline ${isLight ? "divdivunderlinelight" : "divdivunderlinedark"}`}>
                            <div className={`underlinelink ${isLight ? "underlinelinklight" : "underlinelinkdark"}`}></div>
                        </div>
                    </div>
                    <div className="divlinkunderline">
                        <Link to={"/contact"} className="headerlink">{isPersian ? "ارتباط بامن" : "Contact"}</Link>
                        <div className={`divdivunderline ${isLight ? "divdivunderlinelight" : "divdivunderlinedark"}`}>
                            <div className={`underlinelink ${isLight ? "underlinelinklight" : "underlinelinkdark"}`}></div>
                        </div>
                    </div>
                    <div className="divlinkunderline">
                        <Link to={"/project"} className="headerlink">{isPersian ? "پروژه ها" : "Project"}</Link>
                        <div className={`divdivunderline ${isLight ? "divdivunderlinelight" : "divdivunderlinedark"}`}>
                            <div className={`underlinelink ${isLight ? "underlinelinklight" : "underlinelinkdark"}`}></div>
                        </div>
                    </div>
                </div>
                <div className="divspnbtn">
                    <button onClick={toggleLanguage} className={`headerspan ${isLight ? "headerspan-light" : "headerspan-dark"}`}>
                        {isPersian ? "فارسی" : "EN"}
                    </button>
                    <button onClick={toggleTheme} className="btnheader" aria-label="Change theme">
                        {isLight ? (<i className="fa-solid fa-sun myiconl"></i>
                        ) : (
                            <i className="fa-solid fa-moon myiconl"></i>)}
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Nav