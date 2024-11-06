import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div> Please Login first</div>;
  return <h2>Welcome {user.username}</h2>;
};

export default Profile;
