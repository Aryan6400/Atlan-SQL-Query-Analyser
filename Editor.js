import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PublishIcon from '@mui/icons-material/Publish';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useEffect, useState } from "react";
import "./Editor.css";
import { useHistory } from "../context/HistoryContext";
import { useTable } from "../context/TableContext";
import { useTheme } from "../context/ThemeContext";

const Editor=()=>{
    const [code, setCode] = useState('');
    const {setHistory,transfer} = useHistory();
    const {theme} = useTheme();
    const [query,setQuery] = useState("");
    const {setTable} = useTable();

    // Adding the code from history card to the editor using context and global states.
    useEffect(()=>{
        if(transfer!="") setCode(transfer);
    },[transfer])

    function getTimestamp() {
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    const runQuery=(event)=>{
        if(code=="") return;
        const timestamp=getTimestamp();     //Getting a custom date string
        const data={title:"SQL", code:code, timestamp:timestamp};
        
        // Deleting the history of previous day. Can be changed to 24 hrs or 48 hrs as per need.
        const storedHistory=localStorage.getItem("history");
        const parsedHistory=JSON.parse(storedHistory);
        const currentDate = new Date().toISOString().split("T")[0];
        if(parsedHistory){
            const filteredHistory=parsedHistory.filter((obj)=>{
                return obj.timestamp==currentDate;
            })
            setHistory([data,...filteredHistory]);
            localStorage.setItem("history",JSON.stringify([data,...filteredHistory]));
        }
        else{
            setHistory([data]);
            localStorage.setItem("history",JSON.stringify([data]));
        }
        
        // Resetting the table state to generate a random table.
        setTable(prev=>{
            return (1-prev);
        })
    }

    const runSelectedQuery=(e)=>{
        const selection=e.target.value;
        setQuery(e.target.value);

        // Using dummy sql codes for the dropdown select
        if(selection=="read") setCode("SELECT orders.order_number, product.name, product.price, product.stock\nFROM orders\nINNER JOIN product\nON orders.product_id = product.id;");
        if(selection=="delete") setCode("DELETE FROM employees\nWHERE department = 'HR'\nAND status = 'inactive';");
        if(selection=="create") setCode("CREATE TABLE employees (\nemployee_id INT PRIMARY KEY,\nfirst_name VARCHAR(50),\nlast_name VARCHAR(50),\ndepartment VARCHAR(50),\nstatus VARCHAR(20)\n);");
        if(selection=="update") setCode("UPDATE employees\nSET status = 'inactive'\nWHERE employee_id = 2;");
    }

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    return (
        <div className="editor-comp">
            <div className="edit-tab">
                <FormControl variant="filled" className={`query-selection ${theme=="Dark" ? "form-dark" :null}`} margin="normal">
                    <InputLabel>Select Query</InputLabel>
                    <Select className={`${theme=="Dark" ? "select-dark" :null}`} value={query} onChange={runSelectedQuery}>
                        <MenuItem value="read">Read</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                        <MenuItem value="create">Create</MenuItem>
                        <MenuItem value="update">Update</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Button>
                        <FileDownloadIcon/> <span>Import</span>
                    </Button>
                    <Button>
                        <PublishIcon/> <span>Export</span>
                    </Button>
                    <Button className="run-btn" onClick={runQuery}>
                        <PlayArrowIcon/> <span>Run</span>
                    </Button>
                </div>
            </div>
            <div className="edit-box">
                <textarea
                    value={code}
                    className={`${theme=="Dark"?"edit-area-dark":null}`}
                    onChange={handleChange}
                    placeholder="Type your code here..."
                />
            </div>
        </div>
    )
}

export default Editor;