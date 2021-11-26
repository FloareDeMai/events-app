import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
    },
    heading: {
        "&:hover": {
            color: "#00AA57",
        },
        color: "rgb(17, 97, 73)",
        textDecoration: "none",
    },
    image: {
        marginLeft: "15px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
    },
    userName: {
        display: "flex",
        alignItems: "center",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    navbarLinks: {
        display: "flex",
        padding: "10px"
    },
    links: {
        "&:hover": {
            color: "#00AA57",
        },
        padding: "10px",
        color: "rgb(17, 97, 73)"
    }

}));