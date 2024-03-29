import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const ConfirmDialog = ({ isOpen, cancel, confirmDelete }) => {
    return (
        <Dialog open={isOpen} maxWidth="sm" fullWidth>
            <DialogTitle>Confirm the action</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={cancel}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>Do you really want to delete this event?</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={cancel}>
                    Cancel
                </Button>
                <Button color="secondary" variant="contained" onClick={confirmDelete}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;