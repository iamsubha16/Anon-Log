import { Box, Button, FormControl, InputBase, TextareaAutosize, styled } from '@mui/material'
import React from 'react'

import { AddCircle as Add } from '@mui/icons-material'

const ImageUrl = "https://wallpaperaccess.com/full/1431610.jpg";

const TextArea = styled(TextareaAutosize)`
    width: 90%;
    margin-top: 1.5em;
    font-size: 1.5em;
    border: none;
    padding: 1% 2%;
    color: #999;
    border-top: 1px solid grey;
    &:focus-visible {
        outline: none;
        padding: 1% 2%;
        color: #333;
    }
`;

const CreatePosts = () => {
    return (
        <Box sx={{ marginTop: "3.4%", margin: "0 10%" }}>
            <img style={{ height: "60vh", objectFit: "cover", width: "100%" }} src={ImageUrl} alt="background" />

            <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: "2em" }}>
                <label htmlFor='fileInput'>
                    <Add sx={{ fontSize: "3em", color: "#999", cursor: "pointer" }} />
                </label>
                <input type='file' id='fileInput' style={{ display: "none" }} />

                <InputBase sx={{ flex: "1", fontSize: "2.5em" }} placeholder='Title' />
                <Button variant='contained' sx={{ height: "90%" }}>Publish</Button>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextArea
                    minRows={5}
                    placeholder="What's on your Mind?" />
            </Box>

        </Box>
    )
}

export default CreatePosts