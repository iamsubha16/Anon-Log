import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { categories } from '../constants/categories'
import { Link, useSearchParams } from 'react-router-dom'

const Categories = () => {
    const [searchParams] = useSearchParams();
    const cat = searchParams.get('category');

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <Link to={`/create?category=${cat || ''}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">Create Blog</Button>
            </Link>

            <List style={{ width: "80%" }}>
                {
                    categories.map(category => (
                        <ListItem key={category.id} sx={{ border: "1px solid #BBB", borderRadius: "5px", m: "1em 0" }}>
                            <Link style={{ textDecoration: "none", display: "flex", alignItems: "center" }} to={`/?category=${category.type}`}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={category.type}
                                        src={category.icon}
                                        sx={{ width: 50, height: 50, marginRight: "1em" }} />
                                </ListItemAvatar>
                                {/* <ListItemText primary={category.type} /> */}
                                <Typography variant='h6' sx={{ color: "#444" }}>{category.type}</Typography>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>

        </div>
    )
}

export default Categories

//have to integrate All Categories Section where <Link to='/'>All Categories</Link>