import {Avatar, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import moment from "moment";
import {useSelector} from "react-redux";
import UtilService from "../../utils/utils";



function TBody (props) {
    let today = moment(new Date()).format("YYYY-MM-DD");
    const events = useSelector((state) => state.events);
    UtilService.sortDates(events);
    return (
        <TableBody>
            {events.map((event) => (
                <TableRow key={event.id}>
                    <TableCell style={{display: "flex", alignItems: "center"}}>
                        <Avatar alt={event.newEvent.name}
                                src="."
                                className={props.classes.avatar}
                        />
                    </TableCell>
                    <TableCell>
                        <Typography className={props.classes.name}> {event.newEvent.name}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography className={props.classes.name}>{event.newEvent.location}</Typography>
                    </TableCell>
                    <TableCell>{event.newEvent.startDate}</TableCell>
                    <TableCell>{event.newEvent.endDate}</TableCell>
                    <TableCell>{event.newEvent.submittedAt}</TableCell>
                    <TableCell>
                        {/*todo implement cron jobs on backend*/}
                        <Typography
                            className={props.classes.status}
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