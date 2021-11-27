import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: "0 auto",
        maxWidth: 1200,
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: "#673AB7",
        color: "#ffffff",
        fontSize: "1rem",
    },
    avatar: {
        backgroundColor: "#fff",
        color: "gray",
    },
    name: {
        marginLeft: "0",
    },
    deleteButton: {
        "&:hover": {
            backgroundColor: "#ff9e80",
        },
        backgroundColor: "#ff3d00",
        margin: "10px 0",
    },
    paper: {
        padding: "4px",
    },
    status: {
        fontWeight: "bold",
        fontSize: "0.75rem",
        color: "white",
        backgroundColor: "grey",
        borderRadius: 8,
        padding: "3px 10px",
        display: "inline-block",
    },
}));