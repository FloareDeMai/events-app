import {Avatar, TableBody, TableCell, TableRow, Typography, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

import useStyles from "./styles";
import UtilService from "../../utils/utils";
import {deleteEvent} from "../../actions/events";
import {useAtom} from "jotai";
import {userAtom} from "../../App";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";


function TBody() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userLogged] = useAtom(userAtom);
    const [selectedEvent, setSelectedEvent] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
    })
    const events = useSelector((state) => state.events);

    const handleClickDelete = (event) => {
        setSelectedEvent(event);
        setIsOpen(true);
    };

    const cancel = () => {
        setIsOpen(false);
    };

    const confirmDelete = () => {
        dispatch(deleteEvent(selectedEvent._id, setErrorHandler))
        setIsOpen(false);
    };

    useEffect(() => {
        if(errorHandler.hasError){
            showToastError(errorHandler.message)
        }
    },[errorHandler])

    const showToastError = (message) => {
        toast.error(message, UtilService.toastBody);
    };

    return (
        <TableBody>
            <ConfirmDialog
                isOpen={isOpen}
                cancel={cancel}
                confirmDelete={confirmDelete}
            />
            {events.map((event) => (
                <TableRow key={event._id}>
                    <TableCell>
                        <Avatar alt={event.name}
                                style={{textTransform:"capitalize"}}
                                src={event?.creator?.image ? `${process.env.REACT_APP_PHOTO_URL}${event.creator.image}`: "."}
                                className={classes.avatar}
                        />
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name} style={{textTransform:"capitalize"}}> {event.name}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name} style={{textTransform:"capitalize"}}>{event.location} </Typography>
                    </TableCell>
                    <TableCell>{event.startDate}</TableCell>
                    <TableCell>{event.endDate}</TableCell>
                    <TableCell>{event.submittedAt}</TableCell>
                    <TableCell>
                        <Typography
                            className={classes.status}
                            style={{
                                backgroundColor: event.status ? "green" : "red"
                            }}
                        >
                            {event.status
                                ? "Active"
                                : "Closed"}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        {(userLogged?.userId === event?.creator?._id) &&
                        (<Button style={{color: "red"}} onClick={() => handleClickDelete(event)}>Delete</Button>)}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}
export default TBody;

