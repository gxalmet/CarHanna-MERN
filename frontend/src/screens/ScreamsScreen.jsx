import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

//import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { readScream } from '../actions/screamActions'

import { Form, Button } from 'react-bootstrap';

import { updateScream } from '../actions/screamActions'

import ChatRow from '../components/ChatRow';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'column'
    },

  }));
function ScreamsScreen(props) {
    const scrollRef = useRef(null);
    const projectSel = props.projectSel;
    const dispatch = useDispatch();
    const classes = useStyles();
    const screamRead = useSelector(state => state.screamRead);
    const { loading, scream, success } = screamRead;

    const [content, setContent] = useState('')
    const [screamsList, setScreamsList] = useState({})

    function sendScream(e) {
        e.preventDefault();  
        dispatch(updateScream(screamsList._id,content));
        dispatch(readScream(projectSel._id));
        //setContent('');
    }

    useEffect(() => {
        
        if(projectSel._id){
 
            if(loading === false){
                if(success === false){ 
                    dispatch(readScream(projectSel._id));
                }else{
                    setScreamsList(scream);
                }   
            }else{
                dispatch(readScream(projectSel._id));
            }
            if(projectSel._id !== screamsList.projectId){
                dispatch(readScream(projectSel._id));
            } 
        } 
            
        
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        
        }
    }, [dispatch, loading, scream, success, projectSel, screamsList.projectId])
    
    return (
        <Grid className={classes.root}>
            <Grid container >
                <Grid item xs={12} style={{ padding:'1rem', height:'35rem', overflowY:'scroll', scrollBehavior: 'smooth'}} >
                    {   screamsList &&
                        screamsList.messages &&
                        screamsList.messages.map((mes,i)=>{
                            return ( <React.Fragment key={i}><ChatRow key={i} mes={mes}> </ChatRow> <br></br> </React.Fragment> );
                        })}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10} style={{ position: 'relative'}}>
                    <Form.Group controlId="formBasicDes">
                        <Form.Control  as="textarea" rows={2}  defaultValue={content} onChange={(e)=>setContent(e.target.value)}/>
                    </Form.Group>
                </Grid>
                <Grid item xs={2} style={{ position: 'relative'}}>
                    <Button variant="outline-secondary" onClick={sendScream}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ScreamsScreen
