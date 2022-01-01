import { Container, Typography, Grid, TextField, Paper, Button, Select } from '@material-ui/core'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { uploadProperty } from '../../redux/actions/vendorActions'
// import Properties from '../home/properties/Properties';
import styles from './addProperty.module.css'

const AddProperty = () => {
    let loggedInVendor;
    const dispatch = useDispatch()

    if(typeof window !== 'undefined'){
        loggedInVendor = JSON.parse(localStorage.getItem('profile')).result
    }

    const [property, setProperty] = useState({
        title : '', type : "", location : "miami", size : "200 x 300", noOfRooms : "",
        images : [] , price : "", state : "", landmark : "", description : "", 
        ownerId : loggedInVendor?._id, furnishing : "", bathrooms : "", condition : "", 
        parkingSpace : ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(property)
        dispatch(uploadProperty(property))
        setProperty({ title : '', type : "", location : "", size : "", noOfRooms : "",
            images : [] , price : "", state : "", landmark : "", description : "", 
            ownerId : loggedInVendor._id, furnishing : "", bathrooms : "", condition : "", 
            parkingSpace : ""
        })
    }
    
    return ( 
        <Container>
            {/* {JSON.stringify(property)} */}
            {
                loggedInVendor?(

                    <form onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid items xs={10} md={6}>
                                <TextField
                                    className={styles.textField} 
                                    value={property.title}
                                    onChange={(e) => setProperty({ ...property, title : e.target.value})}
                                    name="title"
                                    label="Title of Entry"
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <select variant="outlined" label="Type" name="" id="" value={property.type} onChange={(e)=> setProperty({ ...property, type : e.target.value})} className={styles.select}>
                                    <option value=" ">Select Type Of Property</option>
                                    <option value="Bungalow">Bungalow</option>
                                    <option value="Semi-detatched">Semi-Detatched</option>
                                    <option value="Fully-detatched">Fully Detatched</option>
                                    <option value="Studio-apartment">Studio Apartment</option>
                                    <option value="Flat">Flat</option>
                                    <option value="Duplex">Duplex</option>
                                    <option value="Mansion">Mansion</option>
                                </select>
                                <br/>
                                <select variant="outlined" name="" id="" value={property.state} onChange={(e)=>setProperty({ ...property, state : e.target.value})} className={styles.select}>
                                    <option value="">Select State</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa-ibom">Akwa-Ibom</option>
                                    <option value="Anambra">Anambra</option>
                                    <option value="Bauchi">Bauchi</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                    <option value="Benue">Benue</option>
                                    <option value="Cross-river">Cross-River</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Ebonyi">Ebonyi</option>
                                    <option value="Bornu">Bornu</option>
                                    <option value="Enugu">Enugu</option>
                                    <option value="Gombe">Gombe</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Jigawa">Jigawa</option>
                                    <option value="Kaduna">Kaduna</option>
                                    <option value="Katsina">Katsina</option>
                                    <option value="Kano">Kano</option>
                                    <option value="Ondo">Ondo</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Rivers">Rivers State</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.location}
                                    onChange={(e)=> setProperty({ ...property, location : e.target.value})}
                                    name="location"
                                    label="Location of property"
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.size}
                                    onChange={(e)=> setProperty({ ...property, size : e.target.value})}
                                    name="size"
                                    label="Size of Property"
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <select variant="outlined" name="" id="" value={property.noOfRooms} onChange={(e)=> setProperty({...property, noOfRooms : e.target.value})} className={styles.select}>
                                    <option value="">Number Of Rooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.price}
                                    onChange={(e)=>setProperty({ ...property, price : e.target.value})}
                                    name="price"
                                    label="Price of property"
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.landmark}
                                    onChange={(e)=>setProperty({ ...property, landmark : e.target.value})}
                                    name="landmark"
                                    label="Landmark"
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.description}
                                    onChange={(e)=> setProperty({ ...property, description : e.target.value})}
                                    name="description"
                                    label="Property Description"
                                    multiline={true}
                                    rows={3}
                                    variant="outlined"
                                    color="textSecondary"
                                    required
                                />
                                <br/>
                                <TextField
                                    className={styles.textField} 
                                    value={property.furnishing}
                                    onChange={(e)=>setProperty({ ...property, furnishing : e.target.value})}
                                    name="furnishing"
                                    label="Furnishing"
                                    variant="outlined"
                                    color="textSecondary"
                                    // required
                                />
                                <br/>
                                <select variant="outlined" label="Number Of Bathrooms" name="" id="" value={property.bathrooms} onChange={(e)=> setProperty({...property, bathrooms : e.target.value})} className={styles.select}>
                                    <option value=" ">Number Of Bathrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                                <select variant="outlined" label="Number Of Parking Spaces" name="" id="" value={property.parkingSpace} onChange={(e)=> setProperty({...property, parkingSpace : e.target.value})} className={styles.select}>
                                    <option value=" ">Number Of Parking Spaces</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                                <br/>
                                <FileBase
                                    type='file'
                                    multiple={true}
                                    onDone={(data)=>{
                                        let img = []
                                        setProperty({ ...property, images : img})
                                        data.map((datum)=>(
                                            img.push(datum.base64)
                                        ))
                                    } }
                                />
                                <br/><br/>
                                <Button color="primary" variant="outlined" type="submit">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                ):(
                    <div>
                        <h1>You need to have log in to add properties</h1>
                        <p>Get me a more beautiful 404 page</p>
                    </div>
                )
            }
            
        </Container>
     );
}
 
export default AddProperty;