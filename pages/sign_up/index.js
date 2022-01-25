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
    }

    /* Sign in handler */
    const handleSign_in = (e) =>{
        e.preventDefault()
        dispatch(sign_in(userDetails, router))
    }
    
    return ( 
        <div className={styles.wrapper_container}>
            
           <div className={styles.content}>
           <div>
                {
                    page == SIGN_IN_PAGE?(
                        <Button onClick={togglePage} variant="outlined">Sign Up</Button>
                    ):(
                        <Button onClick={togglePage} variant="outlined" >Sign In</Button>
                    )
                }                
               {/* <hr/> */}
            </div>
            <br/>
            <hr/>
            {
                page == SIGN_IN_PAGE?(
                    <form onSubmit={handleSign_in} className={styles.sign_in_form}>
                        <Typography variant="h3" className={styles.login_text}>Login</Typography>
                    {/* <fieldset className={styles.fieldset}> */}
                        {/* <legend className={styles.legend}>Enter Your Credentials</legend> */}
                        <div className={styles.email_container}>
                            <TextField
                            className={styles.email}
                            type="text"
                            variant="standard"   
                            label="Email"  
                            name="email"
                            value={userDetails.email}  
                            onChange={(e)=> setUserDetails({...userDetails, email : e.target.value})}                    
                            />
                        </div>
                        <div className={styles.password_container}>
                            <TextField
                            className={styles.password}
                            variant="standard"     
                            name="password"
                            type="password"
                            label="Password"
                            value={userDetails.password}  
                            onChange={(e)=> setUserDetails({...userDetails, password : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.submit_container}>
                            <Button variant="outlined" type="submit" className={styles.submit}>Submit</Button>
                        </div>

                    {/* </fieldset> */}
                    <div className={styles.submit_container}>
                        <Button variant="outlined" className={styles.google_submit}>Sign In With Google Account</Button>
                    </div>
                </form>
                ):(
                    // <Container>
                    <form onSubmit={handleSign_up} className={styles.sign_up_form}>

                        <Typography  className={styles.sign_up_text}>Sign Up</Typography>

                        <div className={styles.textfield_container}>
                        <TextField
                            type="text" 
                            fullWidth
                            className={styles.textfield}
                            variant="outlined"     
                            name="firstName"
                            label="First Name"
                            value={userDetails.firstName}  
                            onChange={(e)=> setUserDetails({...userDetails, firstName : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.textfield_container}>
                        <TextField
                            type="text" 
                            className={styles.textfield}
                            variant="outlined"     
                            name="lastName"
                            label="Last Name"
                            value={userDetails.lastName}  
                            onChange={(e)=> setUserDetails({...userDetails, lastName : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.textfield_container}>
                        <TextField
                            type="text" 
                            className={styles.textfield}
                            variant="outlined"     
                            name="email"
                            label="Email"
                            value={userDetails.email}  
                            onChange={(e)=> setUserDetails({...userDetails, email : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.textfield_container}>
                        <TextField
                            type="text" 
                            className={styles.textfield}
                            variant="outlined"     
                            name="phoneNumber"
                            label="Phone Number"
                            value={userDetails.phoneNumber}  
                            onChange={(e)=> setUserDetails({...userDetails, phoneNumber : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.textfield_container}>
                        <TextField
                            variant="outlined"  
                            className={styles.textfield}   
                            name={`password`}
                            type={'password'}
                            label="Password"
                            value={userDetails.password}  
                            onChange={(e)=> setUserDetails({...userDetails, password : e.target.value})}                    
                            />
                        </div>
                        
                        <div className={styles.upload_image}>
                            <br/><br/>Select Profile Picture {" => "} 
                            <FileBase
                                multiple={false}
                                type="file"
                                className={styles.filebase}
                                onDone={({base64})=> setUserDetails({...userDetails, avatar : base64 })}
                            />
                            <br/><br/>
                        </div>
                        <div className="submit_container">
                            <Button variant="outlined" type="submit" className={styles.submit}>Submit</Button>
                        </div>
                </form>
                // </Container>
                )
            }
            {
                page == SIGN_IN_PAGE?(
                    <div className={styles.bottom_text_container}>
                        <Typography className={styles.bottom_text}>Don&apos;t have an account? sign up above</Typography>
                    </div>
                ):(
                    <div className={styles.bottom_text_container}>
                        <Typography className={styles.bottom_text}>Have an account? sign in above</Typography>
                    </div>
                )
            }
           </div>

        </div>
     );
}

 
export default SignUp;

SignUp.getLayout = function PageLayout (page){
    return(
        <>
            { page }
        {/* This position is for footer when included */}
        </>
    )
}