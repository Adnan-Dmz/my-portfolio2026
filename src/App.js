
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import  Home  from "./pages/home"
import  Contact  from "./pages/contact"
import  Project  from "./pages/project"
import Nav from './componet/nav';
import {StyleContectProvider} from './usehook/createcontext'
import { useContext } from 'react';
import { StyleContext } from './usehook/createcontext';
import Footer from './componet/footer';
import ScreenWidth from "./with"
const app=()=>{
  return(
 <StyleContectProvider>
   <AppContent/>
 </StyleContectProvider>
  )
}

function AppContent() {
  const {isLight,isPersian}=useContext(StyleContext)
  return (
    <div className= {` app ${isLight ? "app-light":"app-dark"} ${isPersian?"apppersian":"appenglish"}`}>
        <BrowserRouter>
            <Nav/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="project" element={<Project/>}/>
          </Routes>
          <ScreenWidth/>
          <Footer/>
        </BrowserRouter>
    </div>
    
  );
}
 

export default app;
