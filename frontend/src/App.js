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
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./Pages/CreatePost";
import UpdatePost from "./Pages/UpdatePost";
import PostPage from "./Pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./Pages/Search";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
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
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}></Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCom />
    </Router>
  );
}

export default App;
