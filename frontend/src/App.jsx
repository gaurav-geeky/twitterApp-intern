import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Feed from "./components/Feed";
import Explore from "./components/Explore";
import Search from "./components/Search";
import Login from "./components/Login";
import Profile from "./components/Profile";


function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES (NO SIDEBAR) */}
      <Route path="/login" element={<Login />} />

      {/* APP ROUTES (WITH SIDEBAR) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="home" element={<Feed />} />
        <Route path="explore" element={<Explore />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
}

export default App;
