import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root: {
        "& .MuiTextField-root": {
            margin: "10px",
        },
    },
    paper: {
        padding: "4px",
    },
    date: {
        marginTop: "10px",
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
    },
    buttonSubmit: {
        "&:hover": {
            backgroundColor: "#00AA57",
        },
        margin: "0 auto",
        backgroundColor: "#00684A",
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        padding: "10px"

    }
}));
