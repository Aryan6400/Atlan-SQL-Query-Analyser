import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from "react";
import "./Editor.css";
import { useHistory } from "../context/HistoryContext";
import { useTable } from "../context/TableContext";

const Editor=()=>{
    const [code, setCode] = useState('');
    const {history,setHistory,transfer} = useHistory();
    const [query,setQuery] = useState("");
    const {setTable} = useTable();

    useEffect(()=>{
        if(transfer!="") setCode(transfer);
    },[transfer])

    function getTimestamp() {
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const runQuery=(event)=>{
        const timestamp=getTimestamp();
        const data={title:"SQL", code:code, timestamp:timestamp};
        setHistory([data,...history]);
        setTable(prev=>{
            return (1-prev);
        })
    }

    const runSelectedQuery=(e)=>{
        const selection=e.target.value;
        setQuery(e.target.value);
        if(selection=="read") setCode("Read the column names from the table");
        if(selection=="delete") setCode("Delete elements from the table");
        if(selection=="create") setCode("Create the table");
        if(selection=="update") setCode("Update the elements of the table");
    }

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    return (
        <div className="editor-comp">
            <div className="edit-tab">
                <Typography className="edit-tab-title" variant="h6">
                    {/* SQL Code Editor */}
                </Typography>
                <FormControl className="query-selection" margin="normal">
                    <InputLabel>Select Query</InputLabel>
                    <Select value={query} onChange={runSelectedQuery}>
                        <MenuItem value="read">Read</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                        <MenuItem value="create">Create</MenuItem>
                        <MenuItem value="update">Update</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={runQuery}>
                    <PlayArrowIcon/> <span>Run</span>
                </Button>
            </div>
            <div className="edit-box">
            <textarea
                value={code}
                onChange={handleChange}
                placeholder="Type your code here..."
            />
            </div>
        </div>
    )
}

export default Editor;