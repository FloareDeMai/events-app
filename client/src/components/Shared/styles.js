import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    imageUploadCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    imageUploadPreview: {
        width: "13rem",
        height: "13rem",
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "1rem"
    },
    image: {
        width: " 100%",
        height: "100%",
        objectFit: "cover"
    }


}));