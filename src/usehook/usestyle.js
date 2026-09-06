import { useState } from "react";
const useStyle=()=>{
    const [isLight,setLight]=useState(true)
    const [isPersian,setLanguage]=useState(true)
    const toggleTheme=()=>{
        setLight(t=>!t)
    }
     const toggleLanguage=()=>{
        setLanguage(t=>!t)
    }
    return {isLight,toggleTheme,isPersian,toggleLanguage};
};
export default useStyle