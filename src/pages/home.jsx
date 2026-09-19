import { useContext } from "react"
import { StyleContext } from "../usehook/createcontext"
import './style/Home.css'
import { useState } from "react"
import { useEffect } from "react"
const Home = () => {
    const textfa = [
        "توسعه دهنده وب مدرن",
        "ساخت رابط های کاربری سریع و ریسپانسیو",
        "طراحی و تجربه های وب تمیز و حرفه ای",
        "تبدیل ایده ها به وب سایت های واقعی"
    ]
    const texten = [
        "Modern Web Developer",
        "Building Fast & Responsive Interfaces",
        "Creating Clean & Professional Web Experiences",
        "Turning Ideas Into Real Websites"
    ]
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(p => (p + 1) % textfa.length)
        }, 3500)
        return () => clearInterval(timer)
    }, [])
    const { isLight, isPersian } = useContext(StyleContext)
    return (
        <div className="divhome">
            <div className="nameclassdiv">
                <h1 className={`myname ${isLight ? "mynamelight" : "mynamedark"}`}>
                    {isPersian ? "عدنان  دمی زاده" : "Adnan Damizadeh"}
                </h1>
                <div className={`underline ${isLight ? "underlinelight" : "underlinedark"}`}></div>
            </div>
            <div className="textdiv">
                <p className={`text ${isLight ? "textlight" : "textdark"}`}>{isPersian ? textfa[index] : texten[index]}</p>
            </div>
            <section className="secresponsiv">
                <div className="divaboutt">
                    <div className={`aboutme ${isLight ? "aboutmetlight" : "aboutmedark"}`}>
                        <p className="pabout">
                            {
                                isPersian ? (
                                    <>
                                        من عدنان دمی زاده هستم, <span className={`aboutmetext ${isLight ? "aboutmetextlight" : "aboutmetextdark"}`}>توسعه دهنده وب با تمرکز روی ساخت وب سایت های مدرن</span>,ریسپانسیو و کاربرپسند
                                    </>
                                ) :
                                    (
                                        <>
                                            I'm Adnan Damizadeh,<span className={`aboutmetext ${isLight ? "aboutmetextlight" : "aboutmetextdark"}`}> a web developer focused on building modern</span>, responsive,and user-friendly websites.
                                        </>
                                    )
                            }
                        </p>
                    </div>
                </div>
                <div className="divmotherskills">
                    <div className={`divskills ${isLight ? "divskillsligh" : "divskillsdark"}`}>
                        <h2 className={`title ${isLight ? "titlelight" : "titledark"}`}>{isPersian ? "مهارت ها" : "SKILLS"}</h2>
                        <div className={`skills skills-1 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round">
                                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                                    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                                </svg>
                            </div>
                            <p>React</p>
                        </div>
                        <div className={`skills skills-2 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                    <path d="M10 16.5c0 .8-.5 1.5-1.5 1.5s-1.5-.7-1.5-1.5M14 13.5c.8 0 1.5.5 1.5 1.3 0 1.2-1.5 1.4-1.5 2.2 0 .6.7 1 1.5 1" />
                                </svg>
                            </div>
                            <p>JS</p>
                        </div>
                        <div className={`skills skills-3 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round">
                                    <path d="M4 3l1.7 15.3L12 21l6.3-2.7L20 3H4z" />
                                    <path d="M16.5 7.5H7.5l.5 4.5h8l-.5 4.5-3.5 1-3.5-1-.2-2.5" />
                                </svg>
                            </div>
                            <p>Html</p>
                        </div>
                        <div className={`skills skills-4 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 3l1.7 15.3L12 21l6.3-2.7L20 3H4z" />
                                    <path d="M7.5 7.5h9l-.5 4.5h-8l.5 4.5 3.5 1 3.5-1 .4-4.5" />
                                </svg>
                            </div>
                            <p>Css</p>
                        </div>
                        <div className={`skills skills-5 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                    <path d="M12 6v12M6 12h3a3 3 0 0 1 3 3" />
                                </svg>
                            </div>
                            <p>Git</p>
                        </div>
                        <div className={`skills skills-6 ${isLight ? "skillsligh" : "skillsdark"}`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </div>
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home