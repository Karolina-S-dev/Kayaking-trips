import { createContext, useContext, useState } from "react";

const PageContext = createContext(null);

const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(null);

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within TaskProvider");
  }
  return context;
};

export { PageProvider, usePageContext };
