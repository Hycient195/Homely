import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core'
// import styles from './property.module.css'
import styles from './property.module.css'

const Property = ({image, title, price, state, location, noOfRooms, noOfBaths, type, noOfKitchen, href }) => {
    return ( 
        <Grid item xs={6} sm={4} md={4} lg={3} xl={3} className={styles.propertyCard}>
            <a href={href}>
            <Card id={styles.con}>
                <div className="">
                <CardMedia 
                    component="img"
                    id={styles.pic}
                    image={image}
                    title=""
                />
                </div>
                <CardContent className={styles.cardContent}>
                    <div className={styles.titleBlock}>
                        <div className={styles.typography} id={styles.title}>
                            <Typography  variant="p">{title}</Typography>
                        </div>
                        <Typography className={styles.typography} id={styles.price} variant="p">${price}</Typography>
                    </div>
                    {/* <br/> */}
                    <Typography className={styles.typography} color="textSecondary" variant="body2">State: {state}</Typography>
                    {/* <br/> */}
                    <Typography className={styles.typography} variant="body2" color="textSecondary">{noOfRooms} Bedrooms</Typography>
                    <Typography className={styles.typography} variant="body2" color="textSecondary">{noOfBaths} Baths</Typography>
                    <Typography className={styles.typography} variant="body2" color="textSecondary">{noOfKitchen} Kitchen</Typography>
                    <div id="vendor">
                        
                    </div>
                </CardContent>
            </Card>
            </a>
        </Grid>
     );
}
 
export default Property;