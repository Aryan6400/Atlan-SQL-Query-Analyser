import { Box, Typography, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import "./HistoryCard.css";
import { useTable } from '../context/TableContext';
import { useHistory } from '../context/HistoryContext';

const HistoryCard = ({ title, text, timestamp }) => {
    const {setTable} = useTable();
    const {setTransfer} = useHistory();

    const runHistory=()=>{
        setTable(prev=>{
            return (1-prev);
        })
    }

    const transferHistory=()=>{
        setTransfer(text);
    }

    return (
        <>
            <Box className="history-box">
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography className='history-box-title' variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
                </Box>
                <div>
                    <IconButton className='history-box-icon' onClick={transferHistory}>
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                    <IconButton className='history-box-icon' onClick={runHistory}>
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
