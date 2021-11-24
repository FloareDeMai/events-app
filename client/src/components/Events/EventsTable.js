import {
    Paper,
    TableContainer,
    TableFooter,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Typography,
    Button,
    Container,
    Grid,
} from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import UtilService from "../../utils/utils";



function EventTable() {
    const classes = useStyles();
    let today = moment(new Date()).format("YYYY-MM-DD");
    const events = useSelector((state) => state.events);
    UtilService.sortDates(events);
    return (
        <>
            {events.length ? <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {UtilService.HEADERS.map((header) => (
                                <TableCell key={header} className={classes.tableHeaderCell}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id}>
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
                </Table>
            </TableContainer> : <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" align="center">
                                No events yet...
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>}

        </>
    )
}

export default EventTable;