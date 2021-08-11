import React, { useState } from "react";
export const LanguageContext = React.createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("GE");

  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
