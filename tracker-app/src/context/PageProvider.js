import { createContext, useState } from "react";

const PageContext = createContext("");

export const PageProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <PageContext.Provider value={{ visible, setVisible }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
