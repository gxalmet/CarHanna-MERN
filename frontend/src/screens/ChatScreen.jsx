import 
React, 
{ 
    useState, 
    useEffect 
} from 'react';
import Grid from '@material-ui/core/Grid';
import {Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';



import 
{ 
    useDispatch, 
    useSelector 
} from 'react-redux';
import { searchProjects } from '../actions/projectActions';
import { makeStyles } from '@material-ui/core/styles';
//import Box from '@material-ui/core/Box';
import ScreamsScreen from './ScreamsScreen';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   height: 140,
    //   width: 100,
    // },
    header: {
        border: '.2rem solid grey', 
        borderRadius:'.5rem', 
        padding: '.3rem',
        color: 'grey',
        backgroundColor: '#f5f5f5'
    },
    projectList: {
    //    border: '.1rem solid #f5f5f5', 
        height: '40rem', 
        overflow:'scroll' 
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  export default function ChatScreen() {

    const classes = useStyles();

    const [projectsChat, setProjectsChat] = useState([]);
    const [projectSelected, setProjectSelected] = useState({});
    const dispatch = useDispatch();
    const projectList = useSelector( (state) => state.projectsSearch);
    const { 
        projects, 
        loading, 
//        error 
    } = projectList;


    const selectProject = (project) => {
        
        setProjectSelected(project);
    }
    
    useEffect(() => {
        if(loading === false){
            if(projects){
                setProjectsChat(projects);
            }else{
                dispatch(searchProjects(null,null, false));
            }   
        }else{
            dispatch(searchProjects(null,null, false));
        } 
    }, [dispatch, loading, projects]);

    return (
        
    <Grid container className={classes.root}>
        <Grid container >
            <Grid item xs={12}>
                <Typography variant="h5" align="center" > 
                    My Chats
                </Typography>
                <Grid container justify="center"  >
                    <Grid item xs={3} className={classes.header}>
                        <Typography variant="h5"   style={{textAlign:'center'}}> 
                            Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={7} className={classes.header}>
                        <Typography variant="h5" style={{textAlign:'center'}}> 
                            Chats: {projectSelected.name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" >
                    <Grid item xs={3} className={classes.projectList} >
                        { projectsChat.map((pro,l)=>{
                            return ( 
                            <Grid key={l} item xs={12} style={{ width:'100rem'}}>
                                <Button key={l} variant="outline-secondary" block onClick={()=>selectProject(pro)}>
                                    {pro.name}
                                </Button>
                            </Grid> )
                        })}
                    </Grid>
                    {projectSelected &&
                        
                        <Grid item xs={7} style={{border: '.2rem solid #f5f5f5'}}>
                            <ScreamsScreen projectSel = {projectSelected}></ScreamsScreen>
                        </Grid>
                    }                    

                </Grid>
            </Grid>
        </Grid>
    </Grid>  
        
    );
}
