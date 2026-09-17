import { useContext } from "react"
import { StyleContext } from '../usehook/createcontext'
import './style/Contact.css'
const Contact = () => {
    const { isPersian, isLight } = useContext(StyleContext)
    return (
        <div className="divcontact">
            <div className="divtitle">
                <h2 className={`titllehh ${isLight?"titllehhlight":"titllehhdark"}`}>{isPersian?"ایده ای در ذهن دارید؟":"Have a project in mind?"}</h2>
                <p className={`titllepp ${isLight?"titllepplight":"titlleppdark"}`}>
                 {isPersian?".خوشحال میشوم درمورد ایده هایتان صحبت کنیم":"I'd love to chat about your ideas."}
                </p>
                </div>

            <form className="form">
            <section className={`seccontact ${isLight ? "seccontactlight" : "seccontactdark"}`}>
                <div>
                    <h3 className={`titlecontact ${isLight?"myplight":"mypdark"}`}>
                        {isPersian ? "ارتباط با من" : "Contact Me"}
                    </h3>
                </div>
                <div className="divinput">
                    <div className="divpd">
                        <p className={`myp ${isLight?"myplight":"mypdark" } ${isPersian?"myppersian":"mypenglish"}`}>{isPersian ? "نام کوچک" : "First Name"}</p>
                        <input className={`input ${isLight?"inputlight":"inputdark"} `}></input>
                    </div>
                    <div className="divpd">
                        <p className={`myp ${isLight?"myplight":"mypdark"} ${isPersian?"myppersian":"mypenglish"}`}>{isPersian ? "نام خانوادگی" : "Last Name"}</p>
                        <input className={`input ${isLight?"inputlight":"inputdark"}`}></input>
                    </div>
                </div>
                <div className="divtextarea">
                    <p className={`myp ${isLight?"myplight":"mypdark"} ${isPersian?"myppersian":"mypenglish"}`}>{isPersian?"پیام شما" :"Your Message"}</p>
                    <textarea className={`textarea ${isLight?"inputlight":"inputdark"}`}></textarea>
                </div>
                <div>
                    <button className={`btn ${isLight?"btnlight":"btndark"}`}>
                        {isPersian ? "ارسال" : "Send"}
                        </button>
                </div>
            </section>
            </form>
        </div>
    )
}
export default Contact