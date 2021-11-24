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

import useStyles from "./styles";
import UtilService from "../../utils/utils";


function EventTable() {
    let today = moment(new Date()).format("YYYY-MM-DD");
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {UtilService.HEADERS.map((header) => (
                                <TableCell>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {UtilService.DUMMY_EVENTS.map((event) => (
                            <TableRow>
                                <TableCell>
                                    <Avatar alt={event.name}
                                            src="."
                                    />
                                </TableCell>

                                <TableCell>
                                    <Typography> {event.name}</Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="primary" variant="subtitle2">{event.location}</Typography>
                                </TableCell>

                                <TableCell>{event.startDate}</TableCell>
                                <TableCell>{event.endDate}</TableCell>
                                <TableCell>{event.submittedAt}</TableCell>

                                <TableCell>
                                    <Typography
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}

export default EventTable;