import { useEffect, useState } from "react";
const useStyle=()=>{
    const [isLight,setLight]=useState(false)
    const [isPersian,setLanguage]=useState(true)
    useEffect(()=>{
    const datalight=localStorage.getItem("change_light")
    if(datalight){
        setLight(JSON.parse(datalight))
    }
    },[])
    useEffect(()=>{
const datapersian=localStorage.getItem("save_language")
    if(datapersian){
      setLanguage(JSON.parse(datapersian))
    }
    },[])
   useEffect(()=>{
       localStorage.setItem("change_light",JSON.stringify(isLight))  
    },[isLight]) 
    useEffect(()=>{
       localStorage.setItem("save_language",JSON.stringify(isPersian))  
    },[isPersian]) 
    const toggleTheme=()=>{
        setLight(t=>!t)
    }
     const toggleLanguage=()=>{
        setLanguage(t=>!t)
    }
    return {isLight,toggleTheme,isPersian,toggleLanguage};
};
export default useStyle