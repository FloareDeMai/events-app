import {useState} from "react"
import {
    Paper,
    TableContainer,
    Table,
    Typography,
    Button,
    Container,
    Grid, TableRow, TableFooter, TableCell,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import useStyles from "./styles";
import THead from "./THead";
import TBody from "./TBody";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import {deleteAllEvents} from "../../actions/events";


function EventTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickDeleteAll = () => {
        setIsOpen(true);
    };

    const cancel = () => {
        setIsOpen(false);
    };

    const confirmDeleteAll = () => {
        dispatch(deleteAllEvents());
        setIsOpen(false);
    };

    return (
        <>
            {events.length ?
                <>
                    <ConfirmDialog
                        isOpen={isOpen}
                        cancel={cancel}
                        confirmDeleteAll={confirmDeleteAll}
                    />
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table>
                            <THead classes={classes}/>
                            <TBody classes={classes}/>
                            {events.length  ? (
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={7} align="center">
                                            <Button
                                                onClick={handleClickDeleteAll}
                                                variant="contained"
                                                className={classes.deleteButton}
                                                size="small"
                                                type="submit"
                                            >
                                                Delete All
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            ) : null}
                        </Table>
                    </TableContainer>
                </> :
                <Container>
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