import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider({children}){
    const [popup, setPopup] = useState(false);
    const [chartValue, setChartValue] = useState("");
    
    return (
        <PopupContext.Provider value={{popup, setPopup, chartValue, setChartValue}}>
            {children}
        </PopupContext.Provider>
    )
}

export const usePopup = () => {
    return useContext(PopupContext);
}

export default PopupProvider;