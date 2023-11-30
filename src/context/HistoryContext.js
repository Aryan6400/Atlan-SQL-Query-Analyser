import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

function HistoryProvider({children}){
    const [history, setHistory] = useState([]);
    const [transfer, setTransfer] = useState("");
    
    return (
        <HistoryContext.Provider value={{history, setHistory, transfer, setTransfer}}>
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistory = () => {
    return useContext(HistoryContext);
}

export default HistoryProvider;