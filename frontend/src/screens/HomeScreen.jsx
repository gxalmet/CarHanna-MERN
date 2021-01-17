import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HomeScreen = () => {
    return (
        <Grid 
            container 
            // spacing={3}   
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={9}>
                <Typography variant="h5" align="center" > 
                    HOME
                </Typography>
            </Grid>
        </Grid>
    );
}

export default HomeScreen;
