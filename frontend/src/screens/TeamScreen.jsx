import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

import TableBody from '@material-ui/core/TableBody';
//import Row from '../components/Row';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function TeamScreen () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
            direction="row"
            justify="center"
            alignItems="center">
                <Typography variant="h5" align="center" > 
                    My team
                </Typography>
                <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                               
                                <TableCell>Project Name</TableCell>
                                <TableCell align="right">Begin Date</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
);
}


