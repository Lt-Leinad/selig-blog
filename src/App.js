import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
      </Routes>
    </Router>
  );
}

export default App;
