import { createContext, useContext, useState } from "react";
const TableContext = createContext();
function TableProvider({children}){
    const [table, setTable] = useState(0);
    return (
        <TableContext.Provider value={{table, setTable}}>
            {children}
        </TableContext.Provider>
    )
}

export const useTable = () => {
    return useContext(TableContext);
}
export default TableProvider;
