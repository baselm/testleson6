import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import {Link, useNavigate} from "react-router-dom"


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




export default function SignIn() {
    const mytheme = createTheme();
    let navigation = useNavigate();
    
    const routeChange= () =>{
        console.log("clicked");
        
        navigation('/')

    }
  return (
    <div> 


        <ThemeProvider theme={mytheme}>
                        <Container component ="main" maxWidth="xs">
                            <CssBaseline /> 
                            <Box 
                            sx= {{
                                marginTop : 8, 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'


                            }}>

                            <Avatar sx={{
                                m: 1, bgcolor: 'secondery.main'
                            }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant='h5'>
                                Sign in 
                            </Typography>
                            <Box component="form"  noValidate sx={{mt: 1}}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus>
                                    
                                </TextField>
                                

                            </Grid>

                            <Grid item xs={12}>
                                    
                                <TextField
                                required
                                fullWidth
                                name="password"
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                autoFocus>
                                </TextField>

                            </Grid>
                            <FormControlLabel
                            control={<Checkbox value="remmber" color="secondary" />}
                            label ="Remember me" />
                            <Button

                            onClick={routeChange}
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2}}>
                                Sign in 
                            </Button>
                            <Grid item>
                                <Link to="/SignUp">
                                    {"Don't have an account ? Sign up"}
                                </Link>
                            </Grid>

                        </Grid>
                        
                                
                                


                            </Box>

                        </Box>




                        </Container>



                    </ThemeProvider>
    </div>
  )
}
