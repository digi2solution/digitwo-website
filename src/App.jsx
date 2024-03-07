import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import { useEffect } from "react";
import Blog from "./pages/blogs/Blogs";
import Blogs from "./pages/blogs/Blogs";
import OurWork from "./pages/works/OurWork";
import Contact from "./pages/contact/Contact";

function App() {
  useEffect(() => {
    const handleBlur = () => {
      document.title = "We miss you 😔 - DigiTwo";
    };
    const handleFocus = () => {
      document.title = "DigiTwo 🚀";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/our-work" element={<OurWork/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
