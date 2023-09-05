import { Box, Button, FormControl, InputBase, TextareaAutosize, styled } from '@mui/material'
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { DataContext } from "../../context/dataProvider";
import { API } from "../../services/api";
import { AddCircle as Add } from '@mui/icons-material'

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

const newPostInitialValues = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date(),
}

const CreatePosts = () => {
    const [post, setPost] = useState(newPostInitialValues);
    const [file, setFile] = useState('');

    const location = useLocation();

    const { account } = useContext(DataContext);
    const ImageUrl = post.picture ? post.picture : "https://wallpaperaccess.com/full/1431610.jpg";

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //Calling API to update the Post's Picture
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || "All";
        post.username = account.username;
    }, [file])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box sx={{ marginTop: "3.4%", margin: "0 10%" }}>
            <img style={{ height: "65vh", objectFit: "cover", width: "100%" }} src={ImageUrl} alt="background" />

            <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: "2em" }}>
                <label htmlFor='fileInput'>
                    <Add sx={{ fontSize: "3em", color: "#999", cursor: "pointer" }} />
                </label>
                <input type='file' id='fileInput' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} name="file" />

                <InputBase sx={{ flex: "1", fontSize: "2.5em" }} placeholder='Title' onChange={(e) => handleChange(e)} name='title' />
                <Button variant='contained' sx={{ height: "90%" }}>Publish</Button>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextArea
                    minRows={5}
                    placeholder="What's on your Mind?"
                    onChange={(e) => handleChange(e)}
                    name='description'
                />
            </Box>
        </Box>
    )
}

export default CreatePosts