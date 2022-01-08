import { Typography, Card, CardContent, CardMedia, Grid, StylesProvider, Paper} from '@material-ui/core'
import styles from './propertyCard.module.css'
// import dummyPic from '../../../img/propImage/1.jpg'

const PropertyCard = ({image, title, price, state, location, noOfRooms, noOfBaths, type, noOfKitchen, href}) => {
    return ( 
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} >
            <a href={href}>
            <Paper>
                <Grid container className={styles.paper}>
                    <Grid item xs={5} sm={5} className={styles.propertyImage}>
                        <img className={styles.image} src={image} alt=""/>
                    </Grid>

                    <Grid item xs={7} sm={7} className={styles.propertyContent}>
                        {/* <div className="titleBlock"> */}
                            <Typography className="typography" id="title" variant="h5">{title}</Typography>
                            <Typography className="typography" id="price" variant="h6">{price}</Typography>
                        {/* </div> */}
                        <br/><br/>
                        <Typography className="typography" color="textSecondary" variant="h6">{state}</Typography>
                        {/* <br/> */}
                        <Typography className="typography" variant="body2" color="textSecondary">{noOfRooms} Bedroom {type}</Typography>
                        <Typography className="typography" variant="body2" color="textSecondary">{noOfBaths} Baths</Typography>
                        <Typography className="typography" variant="body2" color="textSecondary">{noOfKitchen} Kitchen</Typography>
                    </Grid>
                </Grid>   
            </Paper>
            </a>
            

               
               
        </Grid>
     );
}
 
export default PropertyCard;