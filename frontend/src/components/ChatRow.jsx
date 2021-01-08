import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {convertDateCool} from '../utils/utils';

export default function ChatRow(props) {
    const mes = props.mes;
    return (
        <Grid container  style={{ padding:'.1rem' }}>
            <Grid item xs={12} style={{ paddingLeft:'.5rem', textAlign:'left' }}>
                <Typography variant="body1" align="left" > 
                   {mes.authorUsername.name} &nbsp;
                   {mes.authorUsername.surname} &nbsp;
                   says at &nbsp;
                   { mes.createdAt &&
                       convertDateCool(mes.createdAt)
                   }
                   
                </Typography>
            </Grid>
            <br></br>
            <Grid item xs={12}  align="end" style={{ textAlign:'left', borderLeft: '.2rem solid grey', borderRight: '.2rem solid grey'}}>
                <Typography variant="body2" align="left"  style={{ padding:'.5rem'}}> 
                   {mes.content}
                </Typography>
            </Grid>
        </Grid>
        // <Typography variant="h6" align="center" > 
        //     {mes.authorUsername.name} {mes.authorUsername.surname} {mes.content}
        // </Typography>
    )
}

