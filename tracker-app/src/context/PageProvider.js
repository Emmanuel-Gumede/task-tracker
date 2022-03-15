import { createContext, useState } from "react";

const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const value = {
    show,
    setShow,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContext;
