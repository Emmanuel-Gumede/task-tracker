import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Feature from "./pages/Feature";
import Welcome from "./pages/Welcome";

export const AuthContext = React.createContext();

const initialState = {
  userName: "",
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGGED_IN":
      console.log("LOGGED_IN", payload);
      return {
        ...state,
        isLoggedIn: true,
      };

    case "LOGGED_OUT":
      console.log("LOGGED_OUT", payload);
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="tasks" element={<Tasks />}>
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="feature" element={<Feature />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
