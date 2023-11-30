import './Output.css';
import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { useTable } from '../context/TableContext';

const Output = ({ columns, data }) => {
    const [tableData, setTableData] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const {table} = useTable();

    useEffect(() => {
        if(isMounted){
            let num=Math.floor(Math.random()*6)+1;
            const csvFilePath = process.env.PUBLIC_URL+"table"+num+".csv";
            console.log(csvFilePath);
            fetch(csvFilePath)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    complete: (result) => {
                        console.log(result.data);
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
    <div className="dynamic-table">
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