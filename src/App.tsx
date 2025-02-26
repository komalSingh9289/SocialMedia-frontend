import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";
import Layout from "./Components/Layout";
import Reels from "./Pages/Reels";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reels" element={<Reels />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;