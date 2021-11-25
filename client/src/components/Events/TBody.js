import {Avatar, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import moment from "moment";
import {useSelector} from "react-redux";

import useStyles from "./styles";
import UtilService from "../../utils/utils";



function TBody () {
    const classes = useStyles();
    let today = moment(new Date()).format("YYYY-MM-DD");
    const events = useSelector((state) => state.events);
    UtilService.sortDates(events);
    return (
        <TableBody>
            {events.map((event) => (
                <TableRow key={event.newEvent.id}>
                    <TableCell style={{display: "flex", alignItems: "center"}}>
                        <Avatar alt={event.newEvent.name}
                                src="."
                                className={classes.avatar}
                        />
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name}> {event.newEvent.name}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.name}>{event.newEvent.location}</Typography>
                    </TableCell>
                    <TableCell>{event.newEvent.startDate}</TableCell>
                    <TableCell>{event.newEvent.endDate}</TableCell>
                    <TableCell>{event.newEvent.submittedAt}</TableCell>
                    <TableCell>
                        {/*// todo read based on the flag from the event in the db*/}
                        <Typography
                            className={classes.status}
                            style={{
                                backgroundColor: moment(today).isAfter(
                                    event.newEvent.endDate
                                )
                                    ? "red"
                                    : "green",
                            }}
                        >
                            {moment(today).isAfter(event.newEvent.endDate)
                                ? "Closed"
                                : "Active"}
                        </Typography>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default TBody;