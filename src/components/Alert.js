import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./Alert.css";

function ErrorAlert(props){

    return(
        <Snackbar
            id='alert'
            open={props.open}
            autoHideDuration={4000}
            onClose={props.handleClose}
        >
            <Alert onClose={props.handleClose} severity="error">
                Fill all the required details to visualise!
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert;