import React from 'react'
import HomeBG from "../assets/Home_BG.jpg"
import { Typography, Button, Box } from '@mui/material'

const Banner = () => {
    return (
        <div>
            <Box style={{
                backgroundImage: `url(${HomeBG})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
                <Typography variant="subtitle1" gutterBottom sx={{ color: "#fff" }}>Weolcome to,</Typography>
                <Typography variant="h2" gutterBottom sx={{ color: "#222" }}>Ano_Log</Typography>
            </Box>

        </div>

    )
}

export default Banner