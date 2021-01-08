//import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';
import Router from './components/Router';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Redirect } from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center">
        <MainNav></MainNav>
        <main className="main">
            <div className="content">
            <Redirect
            from="/"
            to="/home" />
              <Router></Router>
            </div>
            <div className="footer">
              <div>All right reserved 2020.</div>
          </div>
        </main>

      </Grid>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
