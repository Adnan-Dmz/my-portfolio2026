import { useContext, useRef } from "react"
import { StyleContext } from '../usehook/createcontext'
import './style/Contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef()
    const { isPersian, isLight } = useContext(StyleContext)
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_mkj68yu",
            "template_cvutb3f",
            form.current,
            {
                publicKey:
                    "V01YtMrsB-xwk8Goy"
            }
        )
            .then(() => {
                alert(isPersian ? "پیام شما با موفقیت ارسال شد  ممنون  از شما" : "Your message was sent successfully. Thank you")
                form.current.reset()
            })
            .catch(() => {
                alert(isPersian ? "ارسال پیام ناموفق بود.لطفا دوباره تلاش کنید" : "Youe message could not be sent. Please try again.")
            })
    }
    return (
        <div className="divcontact">
            <div className="divtitle">
                <h2 className={`titlehh ${isLight ? "titlehhlight" : "titlehhdark"}`}>{isPersian ? "ایده ای در ذهن دارید؟" : "Have a project in mind?"}</h2>
                <p className={`titlepp ${isLight ? "titlepplight" : "titleppdark"}`}>
                    {isPersian ? ".خوشحال میشوم درمورد ایده هایتان صحبت کنیم" : "I'd love to chat about your ideas."}
                </p>
            </div>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <section className={`seccontact ${isLight ? "seccontactlight" : "seccontactdark"}`}>
                    <div>
                        <h3 className={`titlecontact ${isLight ? "myplight" : "mypdark"}`}>
                            {isPersian ? "ارتباط با من" : "Contact Me"}
                        </h3>
                    </div>
                    <div className="divinput">
                        <div className="divpd">
                            <p className={`myp ${isLight ? "myplight" : "mypdark"} ${isPersian ? "myppersian" : "mypenglish"}`}>{isPersian ? "نام شما" : "Your Name"}</p>
                            <input className={`input ${isLight ? "inputlight" : "inputdark"} `} name="first_name" />
                        </div>
                        <div className="divpd">
                            <p className={`myp ${isLight ? "myplight" : "mypdark"} ${isPersian ? "myppersian" : "mypenglish"}`}>{isPersian ? "ایمیل شما" : "Your Email"}</p>
                            <input className={`input ${isLight ? "inputlight" : "inputdark"}`} name="email" type="email" />
                        </div>
                    </div>
                    <div className="divtextarea">
                        <p className={`myp ${isLight ? "myplight" : "mypdark"} ${isPersian ? "myppersian" : "mypenglish"}`}>{isPersian ? "پیام شما" : "Your Message"}</p>
                        <textarea className={`textarea ${isLight ? "inputlight" : "inputdark"}`} name="message"></textarea>
                    </div>
                    <div>
                        <button className={`btn ${isLight ? "btnlight" : "btndark"}`} type="submit">
                            {isPersian ? "ارسال" : "Send"}
                        </button>
                    </div>
                </section>
            </form>
        </div>
    )
}
export default Contact