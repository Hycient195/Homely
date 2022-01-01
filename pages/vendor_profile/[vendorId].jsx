import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './vendorProfile.module.css';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import CreateIcon from '@material-ui/icons/Create';
import { fetchVendorProperties } from '../../redux/actions/vendorActions';
import Link from 'next/link';

const VendorProfile = ({ vendorId }) => {
    const dispatch = useDispatch()
    
    let loggedInVendor = undefined;

    if(typeof window !== 'undefined'){
        loggedInVendor = JSON.parse(global.localStorage.getItem('profile')).result
    }

    useEffect(()=>{
        dispatch(fetchVendorProperties(loggedInVendor._id))
    },[dispatch])

    const vendorProperties = useSelector((result)=> result.vendorReducer.data)
    // console.log(vendorProperties)

    return ( 
        <div className={styles.body}>
            {
                loggedInVendor &&
                <Container >
                    {/* <h1>Homer</h1> */}
                    <Paper className={styles.infoCard}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={5} lg={4}>
                                <div className={styles.info_card_image}>
                                    <img src={loggedInVendor.avatar} className={styles.avatar} alt=""/>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={7} lg={8}>
                                <Link href={`/update_vendor_profile/${loggedInVendor._id}`} passHref>
                                    <CreateIcon className={styles.create}/>
                                </Link>
                                <div className={styles.info_card_content}>
                                    <Typography variant="h3">{`${loggedInVendor.firstName} ${loggedInVendor.lastName}`}</Typography>
                                    <Typography variant="body1">Email : {loggedInVendor.email}</Typography>
                                    <Typography variant="body1">Phone : {loggedInVendor.phoneNumber}</Typography>
                                </div>
                            </Grid>
                        </Grid>         
                        
                    </Paper>
                </Container>
            }
        <br/><br/>

        <div className={styles.uploadSection}>
            <br/>
            <Grid container>
                <Grid item xs={6}>
                    <Typography align="" gutterBottom className={styles.uploads} variant="h4">Uploads</Typography>
                </Grid>
                <Grid item sx={6}>
                    <Button color="primary" href="/add_property" className={styles.addProperty} variant='outlined'>
                        Add New Property
                    </Button>
                </Grid>
            </Grid>
            
            <br/>
            <Grid container spacing={2} className={styles.centerGrid}>
                {
                    vendorProperties ? (
                        vendorProperties.map((property) => (
                            <PropertyCard
                                key={property._id}
                                image={property.images[0]}
                                title={property.title}
                                price={property.price}
                                location={property.location}
                                noOfRooms={property.noOfRooms}
                                noOfBaths={property.noOfBaths}
                                type={property.type}
                                state={property.state}
                                noOfKitchen={property.noOfKitchen}
                            />
                        ))
                        
                    ):(
                        <div>hey man</div>
                    )
                }
            </Grid>
        </div>   
            
        
        </div>
    );
}

export const getServerSideProps = async (context)=>{
    const { params } = context;
    const { vendorId } = params;

    return{
        props : {
            vendorId
        }
    }
}
 
export default VendorProfile;