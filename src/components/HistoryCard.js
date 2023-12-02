import { Box, Typography, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import "./HistoryCard.css";
import { useTable } from '../context/TableContext';
import { useHistory } from '../context/HistoryContext';
import { useTheme } from '../context/ThemeContext';

const HistoryCard = ({ title, text, timestamp }) => {
    const {setTable} = useTable();
    const {setTransfer} = useHistory();
    const {theme} = useTheme();
    const runHistory=()=>{
        // Generating a random table when history code is executed.
        setTable(prev=>{
            return (1-prev);
        })
    }
    const transferHistory=()=>{
        // History code is transferred to the code editor using context and global states.
        setTransfer(text);
    }

    return (
        <>
            <Box className={`history-box ${theme=="Dark"?"box-dark":null}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography className='history-box-title' variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
                </Box>
                <div>
                    <IconButton title='Use' className='history-box-icon' onClick={transferHistory}>
                        <KeyboardDoubleArrowLeftIcon className={`${theme=="Dark"?"btn-dark":null}`} />
                    </IconButton>
                    <IconButton title='Run' className='history-box-icon' onClick={runHistory}>
                        <PlayArrowIcon className='history-run' />
                    </IconButton>
                </div>
                <div className='history-code-box'>
                    <Typography variant="body1" className='history-code'>
                        {text.length > 75 ? text.slice(0, 75)+"..." : text}
                    </Typography>
                </div>
                <Typography className='history-timestamp' variant="caption">{timestamp}</Typography>
                <AccessTimeIcon className='history-timestamp-icon' />
            </Box>
        </>
    );
};
export default HistoryCard;
