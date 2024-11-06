import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import LOgin from "./Components/LOgin";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <h1>Hello, World!</h1>
        <LOgin />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
