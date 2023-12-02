import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
function ThemeProvider({children}){
    const [theme, setTheme] = useState("Light");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
export default ThemeProvider;
