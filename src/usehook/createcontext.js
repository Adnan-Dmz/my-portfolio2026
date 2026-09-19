import useStyle from "./usestyle";
import { createContext } from "react";
export const StyleContext=createContext(
    {
        isLight:true,
        toggleTheme:()=>{},
        isPersian:true,
        toggleLanguage:()=>{}
    }
)
export const StyleContextProvider=(props)=>{
    return <StyleContext.Provider value={useStyle()}>{props.children}</StyleContext.Provider>
}