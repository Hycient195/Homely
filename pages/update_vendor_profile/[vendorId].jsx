import { TextField, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useState, useEffect } from 'react';
import { updateVendorProfile } from '../../redux/actions/vendorActions';
import { useDispatch } from 'react-redux';


export default function ({ vendorId }){
    const dispatch = useDispatch();
    let loggedInVendor = undefined;

    useEffect(()=>{
        if(window !== 'undefined'){
            loggedInVendor = JSON.parse(global.localStorage.getItem('profile')).result;
        }
    },[])

    const [vendorDetails, setVendorDetails] = useState({
        _id : loggedInVendor?._id,
        firstName : '', lastName : '', 
        email : '', phoneNumber : '',
        password : '' , avatar : ''
    });

    
    /** Vendor details update handler */
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(vendorId)
        dispatch(updateVendorProfile( vendorId, vendorDetails ))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="firstName"
                    type="text"
                    label="First Name"
                    value={vendorDetails.firstName}
                    onChange={((e) => setVendorDetails({ ...vendorDetails, firstName : e.target.value }))}
                    // fullWidth
                    variant="outlined"
                    />

                <TextField 
                    name="lastName"
                    type="text"
                    label="Last Name"
                    value={ vendorDetails.lastName }
                    onChange={(e) => setVendorDetails({ ...vendorDetails, lastName : e.target.value })}
                    // fullWidth
                    variant="outlined"
                    />

                <TextField 
                    name="email"
                    type="text"
                    label="Email"
                    value={ vendorDetails.email }
                    onChange={(e)=> setVendorDetails({ ...vendorDetails, email : e.target.value })}
                    // fullWidth
                    variant="outlined"
                    />

                <TextField 
                    name="password"
                    type="passwore"
                    label="Password"
                    value={ vendorDetails.password }
                    onChange={(e) => setVendorDetails({ ...vendorDetails, password : e.target.value })}
                    // fullWidth
                    variant="outlined"
                    />

                <FileBase
                    multiple={false}
                    type="file"
                    onDone={({base64})=> setVendorDetails({...vendorDetails, avatar : base64 })}
                />  

                <Button type="submit">Update</Button>      
            </form>
        </>
    )
}

export const getServerSideProps = async (context) =>{
    const { params } = context;
    const { vendorId } = params;

    return{
        props : {
            vendorId
        }
    }
}