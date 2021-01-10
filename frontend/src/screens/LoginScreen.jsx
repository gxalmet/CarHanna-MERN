import React, { useState ,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../actions/userActions';

import { Form, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function LoginScreen(props) {

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignIn = useSelector((state)=> state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

  const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(signIn(email, password) );
  }

  useEffect(() => {
      if(userInfo){
          // props.history.push(redirect);
          props.history.push("/");
      }
  }, [props.history, redirect, userInfo]);
    // const classes = useStyles();
    // const handleChange = (prop) => (event) => {
    //     // setValues({ ...values, [prop]: event.target.value });
    //   };
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    //   };
    return (
        <Grid 
            container 
            // spacing={3}   
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={9}>
                { loading && ( <LoadingBox id ="1" mes="Loading..."></LoadingBox> ) }
                { error && ( <MessageBox id ="2" variant='warning' mes={error}></MessageBox> ) }
                <Typography variant="h5" align="center" > 
                    Sign In
                </Typography>
                <Form className="form" onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Button  variant="primary" block type="submit">
                        Submit
                    </Button>
                </Form>
            </Grid>
        </Grid>
        // <Grid>
        //     <Card>
        //         <CardContent>
        //             <Typography component="h5" variant="h5">
        //                 Login screen
        //             </Typography>
        //             <FormGroup>
        //                 <FormControl>
        //                     <InputLabel htmlFor="my-input">Email address</InputLabel>
        //                     <Input id="my-input" aria-describedby="my-helper-text" />
        //                     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        //                 </FormControl>
        //                 <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
        //                     <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        //                     <FilledInput
        //                         id="filled-adornment-password"
        //                         // type={values.showPassword ? 'text' : 'password'}
        //                         // value={values.password}
        //                         onChange={handleChange('password')}
        //                         endAdornment={
        //                         <InputAdornment position="end">
        //                             <IconButton
        //                             aria-label="toggle password visibility"
        //                             onClick={handleClickShowPassword}
        //                             onMouseDown={handleMouseDownPassword}
        //                             edge="end"
        //                             >
        //                             {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
        //                             </IconButton>
        //                         </InputAdornment>
        //                         }
        //                     />
        //                     </FormControl>
        //             </FormGroup>
        //         </CardContent>
        //     </Card>
        // </Grid>
        
    );
}

