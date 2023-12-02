import { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

function HistoryProvider({children}){
    const [history, setHistory] = useState([]);
    const [transfer, setTransfer] = useState("");

    useEffect(()=>{
        // Checking if the user has any history data in local storage.
        const storedHistory=localStorage.getItem("history");
        const currentDate = new Date().toISOString().split("T")[0];
        if(storedHistory){
            // Deleting the history of previous day. Can be changed to 24 hrs or 48 hrs as per need.
            const parsedHistory=JSON.parse(storedHistory);
            const filteredHistory=parsedHistory.filter((obj)=>{
                return obj.timestamp==currentDate;
            })
            console.log(parsedHistory,filteredHistory,currentDate);
            setHistory(filteredHistory);
        }
    },[]);
    
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