import { createContext, useState } from "react";
import { langs } from "../langs";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState('ka');
    const changeLanguage = (lang) => {
        setLanguage(lang);
    }
    return (
        <LanguageContext.Provider value={{
            language,
            changeLanguage,
            langs
        }}>
            {children}
        </LanguageContext.Provider>
    )
}