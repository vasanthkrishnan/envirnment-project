import Admin from "./admin/Admin";
import About from "./Comp/About";
import Contact from "./Comp/Contact";
import Home from "./Comp/Home";
import Message from "./admin/Message";
import Donate from "./admin/Donate";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/admin/*" element={<Admin />} />
      {/* <Route path="/admin/message" element={<Message />} /> */}
          {/* <Route path="admin/donate" element={<Donate />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}