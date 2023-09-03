import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'
import { Button } from '@mui/material'
import { categories } from '../constants/categories'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <Link to="/create" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">Create Blog</Button>
            </Link>

            <List style={{ width: "80%" }}>
                {
                    categories.map(category => (
                        <ListItem key={category.id} sx={{ border: "1px solid #BBB", borderRadius: "5px", m: "1em 0" }}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={category.type}
                                    src={category.icon}
                                    sx={{ width: 50, height: 50, marginRight: "1em" }} />
                            </ListItemAvatar>
                            <ListItemText primary={category.type} />
                        </ListItem>
                    ))
                }
            </List>

        </div>
    )
}

export default Categories