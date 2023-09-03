import React from 'react'

//components
import Banner from '../../components/banner';
import { Box, Container, Grid } from '@mui/material';
import Categories from '../../components/categories';

const Home = () => {
    return (
        <Box sx={{ marginTop: "3.4%" }} >
            <Banner />
            <Grid container>
                <Grid item lg={2} md={2} xs={12}>
                    <Categories />
                </Grid>
                <Grid item lg={10} md={10} xs={12}>
                    Posts
                </Grid>
            </Grid>


        </Box>

    )
}

export default Home