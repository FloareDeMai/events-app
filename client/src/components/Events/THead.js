import {TableCell, TableHead, TableRow} from "@mui/material";

import UtilService from "../../utils/utils";
import useStyles from "./styles";

function THead(){
    const classes = useStyles();
    return(
        <TableHead>
            <TableRow >
                {UtilService.HEADERS.map((header) => (
                    <TableCell key={header} className={classes.tableHeaderCell}>{header}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default  THead;