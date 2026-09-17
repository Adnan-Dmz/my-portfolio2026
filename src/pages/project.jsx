import { useContext } from "react"
import { StyleContext } from "../usehook/createcontext"
import "./style/Project.css"
const Project=()=>{
    const {isPersian,isLight}=useContext(StyleContext)
    return (
        <div className="pro" >
           <h1 className={`TXT ${isLight?"TXTlight":"TXTdark"}`}>
            {isPersian?"پروژه های جدید در راه است":"New project are on the way"}
            </h1>
           </div>
    )
}
export default Project