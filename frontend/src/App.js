//import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';
import Router from './components/Router';
//import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import { 
  BrowserRouter, 
//  Redirect 
} from 'react-router-dom';

function App() {

  
  return (
    // <BrowserRouter>
    //   <Grid
    //     container
    //     direction="row"
    //     justify="flex-start"
    //     alignItems="center">
    //     <MainNav></MainNav>
    //     <main className="main">
    //         <div className="content">
    //           <Router></Router>
    //         </div>
    //         <div className="footer">
    //           <div>All right reserved 2020.</div>
    //       </div>
    //     </main>

    //   </Grid>
    // </BrowserRouter>
      <BrowserRouter>
        <Container fluid>
          <MainNav></MainNav> 
          <Container fluid>
            <Router></Router>
          </Container>
          
          {/* <Container fluid>
            <div className="footer">All right reserved 2020.</div>
          </Container> */}
          
  
        </Container>
      </BrowserRouter>
  );
}

export default App;
