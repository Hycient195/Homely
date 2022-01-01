import { Container, Grid, Typography, FormLabel, TextField, FormControlLabel, Button } from '@material-ui/core'
import {useState, useEffect} from 'react'
import styles from './signup.module.css'
import FileBase from 'react-file-base64'
import { useRouter } from 'next/router';
import { sign_up, sign_in } from '../../redux/actions/vendorActions'
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SignUp = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    
    // const history = useHistory()

    /* State for user details */
    const [userDetails, setUserDetails] = useState({
        firstName : '', lastName : '', email : '', phoneNumber : '',
        password : '', avatar : ''
    })

    /* Variable holding page state */
    const SIGN_UP_PAGE = 'SIGN_UP_PAGE'
    const SIGN_IN_PAGE = 'SIGN_IN_PAGE'

    /* Page state */
    const [page, setPage] = useState(SIGN_IN_PAGE);

    /* Event handler for page toggling */
    const togglePage = () =>{
        setUserDetails({
            firstName : '', lastName : '', email : '', phoneNumber : '',
            password : '', avatar : ''
        })
        if(page == SIGN_IN_PAGE){
            setPage(SIGN_UP_PAGE)
        }else{
            setPage(SIGN_IN_PAGE)
        }
    }

    /* Sign up handler */
    const handleSign_up = (e) =>{
        e.preventDefault()
        dispatch(sign_up(userDetails, router))
        console.log(userDetails, router)
    }

    /* Sign in handler */
    const handleSign_in = (e) =>{
        e.preventDefault()
        dispatch(sign_in(userDetails, router))
        console.log(userDetails, router)
    }
    
    return ( 
        <div>
            
            <Container>
                {
                    page == SIGN_IN_PAGE?(
                        <Button onClick={togglePage} variant="outlined">Sign Up</Button>
                    ):(
                        <Button onClick={togglePage} variant="outlined">Sign In</Button>
                    )
                }
                {/* {JSON.stringify(userDetails)} */}
                
               
            </Container>
            <br/>
            {
                page == SIGN_IN_PAGE?(
                    <form onSubmit={handleSign_in}>
                    <TextField
                        type="text"
                        variant="outlined"   
                        label="Email"  
                        name="email"
                        value={userDetails.email}  
                        onChange={(e)=> setUserDetails({...userDetails, email : e.target.value})}                    
                    />
                    <TextField
                        variant="outlined"     
                        name="password"
                        type="password"
                        label="Password"
                        value={userDetails.password}  
                        onChange={(e)=> setUserDetails({...userDetails, password : e.target.value})}                    
                        />
                    <Button variant="outlined" type="submit">Submit</Button>

                </form>
                ):(
                    <Container>
                    <form onSubmit={handleSign_up}>
                        <TextField
                            type="text" 
                            variant="outlined"     
                            name="firstName"
                            label="First Name"
                            value={userDetails.firstName}  
                            onChange={(e)=> setUserDetails({...userDetails, firstName : e.target.value})}                    
                        />
                        <TextField
                            type="text" 
                            variant="outlined"     
                            name="lastName"
                            label="Last Name"
                            value={userDetails.lastName}  
                            onChange={(e)=> setUserDetails({...userDetails, lastName : e.target.value})}                    
                        />
                        <br/><br/>
                        <TextField
                            type="text" 
                            variant="outlined"     
                            name="email"
                            label="Email"
                            value={userDetails.email}  
                            onChange={(e)=> setUserDetails({...userDetails, email : e.target.value})}                    
                        />
                        <TextField
                            type="text" 
                            variant="outlined"     
                            name="phoneNumber"
                            label="Phone Number"
                            value={userDetails.phoneNumber}  
                            onChange={(e)=> setUserDetails({...userDetails, phoneNumber : e.target.value})}                    
                        />
                        <br/><br/>
                        <TextField
                            variant="outlined"     
                            name={`password`}
                            type={'password'}
                            label="Password"
                            value={userDetails.password}  
                            onChange={(e)=> setUserDetails({...userDetails, password : e.target.value})}                    
                        />
                        <br/><br/>Upload Property Images
                        <FileBase
                            multiple={false}
                            type="file"
                            onDone={({base64})=> setUserDetails({...userDetails, avatar : base64 })}
                        />
                        <br/><br/>
                    <Button variant="outlined" type="submit">Submit</Button>
                </form>
                </Container>
                )
            }
            {
                page == SIGN_IN_PAGE?(
                    <Typography>Don&apos;t have an account? sign up above</Typography>
                ):(
                    <Typography>Have an account? sign in above</Typography>
                )
            }

        </div>
     );
}
 
export default SignUp;