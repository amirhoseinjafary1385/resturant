import App from '../../App';
import React, { createContext, useState, useContext, Children } from 'react';

// ایجاد context

const ThemeContext = createContext();

// کامپوننت Provider

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);

    };
    
    return(
        <ThemeContext.Provider value={{ isDarkMode , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

// هوک برای استفاده از Context

export const useTheme = () => {
    return useContext(ThemeContext);
};