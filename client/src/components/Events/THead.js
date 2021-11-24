import {TableCell, TableHead, TableRow} from "@mui/material";
import UtilService from "../../utils/utils";

function THead(props){
    return(
        <TableHead>
            <TableRow>
                {UtilService.HEADERS.map((header) => (
                    <TableCell key={header} className={props.classes.tableHeaderCell}>{header}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default  THead;