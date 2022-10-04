// libs
import { Routes, Route } from "react-router-dom";

// components
import Users from "./apps/components/users/Users";
import UserPosts from "./apps/components/userPosts/UserPosts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user-posts" element={<UserPosts />} />
    </Routes>
  );
};
export default AppRoutes;
