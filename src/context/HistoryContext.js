import { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

function HistoryProvider({children}){
    const [history, setHistory] = useState([]);
    const [transfer, setTransfer] = useState("");

    useEffect(()=>{
        // Checking if the user has any history data in local storage.
        const storedHistory=localStorage.getItem("history");
        const currentDate = new Date().toISOString().split("T")[0];
        if(storedHistory!=null){
            // Deleting the history of previous day. Can be changed to 24 hrs or 48 hrs as per need.
            console.log(storedHistory);
            const parsedHistory=JSON.parse(storedHistory);
            const filteredHistory=parsedHistory.filter((obj)=>{
                return obj.timestamp==currentDate;
            })
            setHistory(filteredHistory);
            localStorage.setItem("history",JSON.stringify(filteredHistory));
        }
        else{
            localStorage.setItem("history",JSON.stringify(history));
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