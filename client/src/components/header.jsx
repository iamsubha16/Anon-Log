import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
        <AppBar>
            <Toolbar sx={{ background: "#444", display: "flex", gap: "4em", justifyContent: "center", alignItems: "center" }}>
                <Link style={{ textDecoration: "none" }} to="/"><Typography sx={{ fontSize: "1.4em", color: "white" }}>Home</Typography></Link>
                <Link style={{ textDecoration: "none" }} to="/about"><Typography sx={{ fontSize: "1.4em", color: "white" }}>About</Typography></Link>
                <Link style={{ textDecoration: "none" }} to="/contact" ><Typography sx={{ fontSize: "1.4em", color: "white" }}>Contact</Typography></Link>
                <Link style={{ textDecoration: "none" }} to="/login"><Typography sx={{ fontSize: "1.4em", color: "white" }}>Logout</Typography></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header