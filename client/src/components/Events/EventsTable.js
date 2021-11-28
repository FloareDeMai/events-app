import {useEffect} from "react"
import {
    Paper,
    TableContainer,
    Table,
    Typography,
    Container,
    Grid,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import useStyles from "./styles";
import THead from "./THead";
import TBody from "./TBody";
import {getAllEvents} from "../../actions/events";


function EventTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch])


    return (
        <>
            {events?.length ?
                <>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table>
                            <THead/>
                            <TBody/>
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