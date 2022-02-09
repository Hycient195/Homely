import { Container, Grid, Typography, FormLabel, TextField, FormControlLabel, Button } from '@material-ui/core'
import {useState, useEffect} from 'react'
import styles from './signup.module.css'
import FileBase from 'react-file-base64'
import { useRouter } from 'next/router';
import { sign_up, sign_in } from '../../redux/actions/vendorActions'
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Image from 'next/image';
import googleLogo from '../../public/google_logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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
           
           <div id={styles.logos}>
               <ArrowBackIcon id={styles.back_button}>back</ArrowBackIcon>
               {
                   page == SIGN_IN_PAGE ?(
                    <Typography variant="h3" className={styles.login_text}>Login</Typography>
                   ):(
                    <Typography variant="h3" className={styles.login_text}>Sign Up</Typography>
                   )
               }
                {/* <Typography variant="h3" className={styles.login_text}>Login</Typography>            */}
                <Image id={styles.google_logo} width="35" height="35" src={googleLogo} alt="Google Sign in logo"/>
           </div>
                {
                    // page == SIGN_IN_PAGE?(
                    //     <Button onClick={togglePage} variant="outlined">Sign Up</Button>
                    // ):(
                    //     <Button onClick={togglePage} variant="outlined" >Sign In</Button>
                    // )
                }                
               {/* <hr/> */}
            </div>
            <br/>
            {/* <hr/> */}
            {
                page == SIGN_IN_PAGE?(
                    <form onSubmit={handleSign_in} className={styles.sign_in_form}>
                       {/* <div> */}
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
                        {/* </div> */}
                        {
                            page == SIGN_IN_PAGE &&(
                                <div className={styles.bottom_text_container}>
                                    <Typography className={styles.bottom_text}>New User?  <a onClick={togglePage} variant="outlined" class={styles.sign_in_text}>Sign Up</a> here</Typography>
                                </div>
                            )
                        }

                        <div className={styles.submit_container}>
                            <Button variant="outlined" type="submit" className={styles.submit}>Proceed</Button>
                        </div>

                        
                    {/* </fieldset> */}
                    {/* <div className={styles.submit_container}>
                        <Button variant="outlined" className={styles.google_submit}>Sign In With Google Account</Button>
                    </div> */}
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
                            variant="standard"     
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
                            variant="standard"     
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
                            variant="standard"     
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
                            variant="standard"     
                            name="phoneNumber"
                            label="Phone Number"
                            value={userDetails.phoneNumber}  
                            onChange={(e)=> setUserDetails({...userDetails, phoneNumber : e.target.value})}                    
                            />
                        </div>

                        <div className={styles.textfield_container}>
                        <TextField
                            variant="standard"  
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

                        {
                            page == SIGN_UP_PAGE &&(
                                <div className={styles.bottom_text_container}>
                                    <Typography className={styles.bottom_text}>Already have an account?  <a onClick={togglePage} variant="outlined" class={styles.sign_in_text}>Sign in</a> here</Typography>
                                </div>
                            )
                        }

                        <p className="submit_container">
                            <Button variant="standard" type="submit" className={styles.submit}>Submit</Button>
                        </p>
                </form>
                // </Container>
                )
            }
            <div className={styles.forgot_password_container}>
                <a className={styles.forgot_password}>
                    forgot password? Click here
                </a>
            </div>
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