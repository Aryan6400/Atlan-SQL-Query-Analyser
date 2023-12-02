import './Output.css';
import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { useTable } from '../context/TableContext';
import { useTheme } from '../context/ThemeContext';

const Output = () => {
    const [tableData, setTableData] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const {table} = useTable();
    const {theme} = useTheme();
    useEffect(() => {
        // Only generating the table when query is executed and not on loading.
        if(isMounted){
            // Accessing a random ccsv file and extracting the data using "Papaparse".
            let num=Math.floor(Math.random()*6)+1;
            const csvFilePath = process.env.PUBLIC_URL+"/table"+num+".csv";
            fetch(csvFilePath)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    complete: (result) => {
                        setTableData(result.data);
                    },
                    header: true,
                });
            })
            .catch((error) => {
                console.error('Error loading CSV file:', error);
            });
        }
        else{
            setIsMounted(true);
        }
        
    }, [table]);

    return (
        <div className={`dynamic-table ${theme=="Dark"?"dark-table":null}`}>
            <table>
                <thead>
                <tr>
                    {tableData.length > 0 &&
                    Object.keys(tableData[0]).map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => (
                    <tr key={index} className={index%2==0?"even":"odd"}>
                    {Object.values(row).map((value, index2) => (
                        <td key={index2}>{value}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default Output;
