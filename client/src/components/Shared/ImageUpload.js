import React, {useEffect, useRef, useState} from "react";
import {Button} from "@mui/material";
import useStyles from "../Shared/styles";

function ImageUpload({setFile, file}) {
    const classes = useStyles();
    const filePickerRef = useRef();
    const [previewUrl, setPreviewUrl] = useState();


    const pickedHandler = (event) => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile)
        }
    }

        useEffect(() => {
            if (!file) {
                return;
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result)
            };
            fileReader.readAsDataURL(file);
        }, [file])

        const pickImageHandler = () => {
            filePickerRef.current.click();
        };

        return (
            <>
                <input
                    style={{display: 'none'}}
                    name="image"
                    ref={filePickerRef}
                    accept=".jpg,.png,.jpeg"
                    type="file"
                    onChange={pickedHandler}
                />
                <div className={classes.imageUploadCenter}>
                    <div className={classes.imageUploadPreview}>
                        {previewUrl && <img src={previewUrl} alt="Preview" className={classes.image}/>}
                        {!previewUrl && <p>Please pick an image.</p>}
                    </div>
                    <Button
                        type="button"
                        onClick={pickImageHandler}
                        variant="contained"
                        color="primary">
                        Upload Image
                    </Button>
                </div>
            </>
        )

    }
    export default ImageUpload;