import {Avatar, TableBody, TableCell, TableRow, Typography, Button} from "@mui/material";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";

import useStyles from "./styles";
import UtilService from "../../utils/utils";
import {deleteEvent} from "../../actions/events";
import {useAtom} from "jotai";
import {userAtom} from "../../App";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import {useState} from "react";


function TBody() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userLogged] = useAtom(userAtom);
    const [selectedEvent, setSelectedEvent] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const events = useSelector((state) => state.events);
    let today = moment(new Date()).format("YYYY-MM-DD");
    UtilService.sortDates(events);

    const handleClickDelete = (event) => {
        setSelectedEvent(event);
        setIsOpen(true);
    };

    const cancel = () => {
        setIsOpen(false);
    };

    const confirmDelete = () => {
        dispatch(deleteEvent(selectedEvent._id))
        setIsOpen(false);
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
                    <TableCell style={{display: "flex", alignItems: "center"}}>
                        <Avatar alt={event.name}
                                src="."
                                className={classes.avatar}
                        />
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name}> {event.name}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name}>{event.location}</Typography>
                    </TableCell>
                    <TableCell>{event.startDate}</TableCell>
                    <TableCell>{event.endDate}</TableCell>
                    <TableCell>{event.submittedAt}</TableCell>
                    <TableCell>
                        {/*// todo read based on the flag from the event in the db*/}
                        <Typography
                            className={classes.status}
                            style={{
                                backgroundColor: moment(today).isAfter(
                                    event.endDate
                                )
                                    ? "red"
                                    : "green",
                            }}
                        >
                            {moment(today).isAfter(event.endDate)
                                ? "Closed"
                                : "Active"}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        {console.log(event._id)}
                        {(userLogged?.userId === event?.creator) &&
                        (<Button style={{color: "red"}} onClick={() => handleClickDelete(event)}>Delete</Button>)}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}
export default TBody;

