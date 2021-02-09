import React from 'react';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import { 
//    Form, 
    Col, 
//    Button, 
    Card, 
    Row, 
    Container 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import ListIcon from '@material-ui/icons/List';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ChatIcon from '@material-ui/icons/Chat';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
const HomeScreen = () => {
    return (
        <Grid 
            container 
            direction="row"
            justify="center"
            alignItems="center">

                <Container>
                    <Row>
                        <Col xs={12} md={12} style={{padding: "2rem"}}>
                            <Card >
                                <Card.Body>
                                    <CreateNewFolderIcon />
                                    <Card.Title>Create projects</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create projects</Card.Subtitle>
                                    <Card.Text>
                                        Create your projects and managed your team...<Link to='/createproject'> here</Link> 
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} style={{padding: "2rem"}}>                    
                            <Card >
                                <Card.Body>
                                    <ViewAgendaIcon />
                                    <Card.Title>Agenda</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create projects</Card.Subtitle>
                                    <Card.Text>
                                        Check your agenda in order to show your day targets ...<Link to='/agenda'> here</Link>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col> 
                    </Row>
                    <Row>
                        <Col xs={12} md={12} style={{padding: "2rem"}}>                     
                            <Card >
                                <Card.Body>
                                    <CalendarViewDayIcon />
                                    <Card.Title>Calendar</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Create projects</Card.Subtitle>
                                    <Card.Text>
                                        Check the calendar to manage your projects ...<Link to='/calendar'> here</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>  
                    </Row>
                    <Row>
                        <Col xs={12} md={12} style={{padding: "2rem"}}>                     
                            <Card >
                                <Card.Body>
                                    <ChatIcon />
                                    <Card.Title>Chat</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Chat of your projects</Card.Subtitle>
                                    <Card.Text>
                                        Chat with your collegues and build your projects...<Link to='/chat'> here</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>  
                    </Row>
                </Container>
                
                
            
        </Grid>
    );
}

export default HomeScreen;
