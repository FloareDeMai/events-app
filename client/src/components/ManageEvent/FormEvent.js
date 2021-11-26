import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {
    Container,
    Paper,
    TextField,
    Typography,
    Button,
    Grid, Box,
} from "@mui/material";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

import {createEvent} from "../../actions/events";
import useStyles from "./styles";
import LocalStorageService from "../../localStorage";


function FormEvent() {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [eventTimeFrame, setEventTimeFrame] = useState([null, null]);
    const [eventData, setEventData] = useState({
        id: uuidv4(),
        name: "",
        location: "",
        startDate: null,
        endDate: null,
        submittedAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    })

    const showToastSuccess = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createEvent({
            ...eventData,
            startDate: eventData.startDate,
            endDate: eventData.endDate
        }, navigate, showToastSuccess));
    }

    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={7}>
                    <Paper className={classes.paper}>
                        <form
                            className={`${classes.root} ${classes.form}`}
                            autoComplete="off"
                            onSubmit={handleSubmit}>
                            <Typography variant="h6">
                                Creating an Event
                            </Typography>
                            <TextField
                                name="name"
                                variant="outlined"
                                label="Event Title"
                                fullWidth
                                required
                                value={eventData.name}
                                onChange={(e) =>
                                    setEventData({...eventData, name: e.target.value})}
                            />
                            <TextField
                                name="location"
                                variant="outlined"
                                label="Location"
                                fullWidth
                                required
                                value={eventData.location}
                                onChange={(e) =>
                                    setEventData({...eventData, location: e.target.value})}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDateRangePicker
                                    disablePast
                                    startText="Start Date"
                                    endText="End Date"
                                    value={eventTimeFrame}
                                    onChange={(newValue) => {
                                        console.log(moment(newValue[0].toLocaleDateString()).format("YYYY-MM-DD")+  " data")
                                        setEventData({
                                            ...eventData,
                                            startDate: newValue[0] ? moment(newValue[0].toLocaleDateString()).format("YYYY-MM-DD") : null,
                                            endDate: newValue[1] ?moment(newValue[1].toLocaleDateString()).format("YYYY-MM-DD") : null,
                                        })
                                        setEventTimeFrame(newValue);
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} required/>
                                            <Box sx={{mx: 2}}> to </Box>
                                            <TextField {...endProps} required/>
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                            <Container className={classes.buttonContainer}>
                                <Button
                                    className={classes.buttonSubmit}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Container>
                        </form>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

export default FormEvent;