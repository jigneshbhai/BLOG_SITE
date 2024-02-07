import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import FooterCom from "./components/FooterCom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {currentUser ? (
          <>
            <Route path="/sign-in" element={<Navigate to="/" />} />
            <Route path="/sign-up" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </>
        )}
        {/* Protect dashboard route */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <FooterCom />
    </Router>
  );
}

export default App;
