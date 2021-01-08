import 
React, 
{ 
    useState ,
    useEffect 
} from 'react';
import 
{ 
    useDispatch, 
    useSelector 
} from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { statusList }  from '../constants/statusConstats';
import { updateProject, readProject } from '../actions/projectActions';
import { createScream } from '../actions/screamActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';

import { convertDate } from  '../utils/utils.js';

export default function EditProjectScreen(props) {
    const history = useHistory();
    var projectId = props.match.params.id;

    const dispatch = useDispatch();

    const projectRead = useSelector((state)=> state.projectRead)  || {};
    const { loading, project, success } = projectRead;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [begin_date, setBegin_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [status, setStatus] = useState('');

    function saveProjectButton(e) {
        e.preventDefault();  
                                       
        dispatch(updateProject(project._id, null, name, description, begin_date, end_date, status, null ));       
    }

    function createProjectButton(e) {
        var ref = '/createproject' + project._id;
        history.push(ref);                        
    }
    function createChatButton(e) {
        dispatch(createScream(projectId));                     
    }

    useEffect(() => {
        
        if(loading === false){
            if(project && project._id === projectId){

                setName(project.name);
                setDescription(project.description);
                setBegin_date( convertDate(project.begin_date) );
                setEnd_date( convertDate(project.end_date) );
                setStatus(project.status);
            }else{
                dispatch(readProject(projectId));
            }   
        }else{
            dispatch(readProject(projectId));
        } 
         
    }, [dispatch, project, props.id, loading, projectId, success]);

    
    

    return (
        <Grid 
            container 
            // spacing={3}   
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={9}>
                <Typography variant="h5" align="center" > 
                    Create project
                </Typography>
                { loading === true && ( <LoadingBox id="1" mes="Loading data..."></LoadingBox> ) }
                { success === false && ( <MessageBox id ="2" variant='danger' mes="Creación correcta!!"></MessageBox> ) }
                <Form className="form" >
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDes">
                        <Form.Label>Description</Form.Label>
                        <Form.Control  as="textarea" rows={3}  defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicBegin">
                        <Form.Label>Begin Date</Form.Label>
                        <Form.Control type="date" defaultValue={begin_date} onChange={(e)=>setBegin_date(e.target.value)}/>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" defaultValue={end_date} onChange={(e)=>setEnd_date(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="StatusControl">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" custom value={status} onChange={(e)=>setStatus(e.target.value)}> 
                            {statusList.map((stat,i)=>{
                                if(stat === status){
                                    return (<option key={i} value={stat.value} selected="true">{stat.label}</option>)
                                }else{
                                    return (<option key={i} value={stat.value} >{stat.label}</option>)
                                }
                                
                            })}
                            
                            {/* <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option> */}
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" block onClick={saveProjectButton}>
                        Submit
                    </Button>
                    <Button variant="secondary" block onClick={createProjectButton}>
                        Create sub-project
                    </Button>
                    <Button variant="secondary" block onClick={createChatButton}>
                        Create chat
                    </Button>
                </Form>
            </Grid>
        </Grid>
    );
}

