import React, { useEffect, useState, createContext } from "react";

const MOBILE_WIDTH = 1000;
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

  const [chapters, setChapters] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const detectScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH);
    };

    window.addEventListener("resize", detectScreenSize);

    return () => {
      window.removeEventListener("resize", detectScreenSize);
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        chapters,
        currentChapter,
        isMobile,
        searchQuery,
        setChapters,
        setCurrentChapter,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
