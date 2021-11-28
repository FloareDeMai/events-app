import {makeStyles} from "@mui/styles";


export default makeStyles(() => ({
    picture: {
        height: "200px"
    },
    link: {
        "&:hover": {
            color: "#00AA57",
        },
        padding: "10px 20px",
        color: "rgb(17, 97, 73)",
        backgroundColor: "#A8E5C7FF",
        textDecoration: "none",
        borderRadius: "5px",
        marginTop: "10px"
    }
}));