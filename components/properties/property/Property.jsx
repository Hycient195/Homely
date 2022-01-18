import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core'
// import styles from './property.module.css'
import styles from './property.module.css'

const Property = ({image, title, price, state, location, noOfRooms, noOfBaths, type, noOfKitchen, href }) => {
    return ( 
        <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
            <a href={href}>
            <Card id={styles.con}>
                <CardMedia 
                    component="img"
                    id="pic"
                    image={image}
                    title=""
                />
                <CardContent>
                    <div className={styles.titleBlock}>
                        <Typography className="typography" id={styles.title} variant="h6">{title}</Typography>
                        <Typography className="typography" id={styles.price} variant="h6">${price}</Typography>
                    </div>
                    <Typography className="typography" color="textSecondary" variant="body2">State: {state}</Typography>
                    {/* <br/> */}
                    <Typography className="typography" variant="body2" color="textSecondary">{noOfRooms} Bedrooms</Typography>
                    <Typography className="typography" variant="body2" color="textSecondary">{noOfBaths} Baths</Typography>
                    <Typography className="typography" variant="body2" color="textSecondary">{noOfKitchen} Kitchen</Typography>
                    <div id="vendor">
                        
                    </div>
                </CardContent>
            </Card>
            </a>
        </Grid>
     );
}
 
export default Property;