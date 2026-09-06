
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import  Home  from "./pages/home"
import  Contact  from "./pages/contact"
import  Project  from "./pages/project"
import Nav from './componet/nav';
import {StyleContectProvider} from './usehook/createcontext'
function App() {
  return (
    <div className="App">
      <StyleContectProvider>
        <BrowserRouter>
            <Nav/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="project" element={<Project/>}/>
          </Routes>
        </BrowserRouter>
      </StyleContectProvider>
    </div>
  );
}

export default App;
