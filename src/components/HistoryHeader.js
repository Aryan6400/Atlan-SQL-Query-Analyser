import { Box, Typography } from '@mui/material';
import "./HistoryHeader.css";
import { useTheme } from '../context/ThemeContext';

const HistoryHeader = () => {
    const {theme}=useTheme();
    return (
        <>
            <Box className={`history-header ${theme=="Dark"?"dark-font":null}`}>
                <Typography variant="h2">History</Typography>
            </Box>
        </>
    );
};

export default HistoryHeader;
