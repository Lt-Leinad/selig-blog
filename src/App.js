import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FAQ from "./components/FAQ";
import OurImpact from "./components/OurImpact";
import OurTeam from "./components/OurTeam";
import Press from "./components/Press";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<About />} path="/about" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<OurImpact />} path="/our-impact" />
        <Route element={<OurTeam />} path="/our-team" />
        <Route element={<Press />} path="/press" />
      </Routes>
    </Router>
  );
}

export default App;
