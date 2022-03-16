import { createContext, useContext, useReducer } from "react";

const initialState = {
  userName: "",
  isLoggedIn: false,
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export default useUser;
