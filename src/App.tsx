import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";


import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";
import Layout from "./Components/Layout";
import Reels from "./Pages/Reels";

const App = () => {
  return (
    <>
      {/* Redirect non-authenticated users to sign in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <Routes>

          {/* Protected Routes under Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reels" element={<Reels />} />
          </Route>
        </Routes>
      </SignedIn>
    </>
  );
};

export default App;
