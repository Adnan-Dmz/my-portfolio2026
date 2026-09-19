
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Contact from "./pages/contact"
import Project from "./pages/project"
import Nav from './component/nav';
import { StyleContextProvider } from './usehook/createcontext'
import { useContext } from 'react';
import { StyleContext } from './usehook/createcontext';
import Footer from './component/footer';
import ScreenWidth from "./with"
const App = () => {
  return (
    <StyleContextProvider>
      <AppContent />
    </StyleContextProvider>
  )
}
function AppContent() {
  const { isLight, isPersian } = useContext(StyleContext)
  return (
    <div className={` app ${isLight ? "app-light" : "app-dark"} ${isPersian ? "apppersian" : "appenglish"}`}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
