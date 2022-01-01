import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core'
// import './loading.css'

const Loading = ({image, title, price, location, noOfRooms, noOfBaths, type, noOfKitchen}) => {
    return ( 
        <Grid item xs={6} sm={4} md={4} >
            <Card id="l_con">
                <CardMedia 
                    component="img"
                    id="l_pic"
                    image={image}
                    title=""
                />
                <CardContent>
                    <div className="l_titleBlock">
                        <Typography className="title_typography" id="l_title" variant="h6">{title}</Typography>
                        <Typography className="title_typography" id="l_price" variant="h6">{price}</Typography>
                    </div>
                    <Typography className="location_typography" color="textSecondary" variant="h6">{location}</Typography>
                    {/* <br/> */}
                    <Typography className="body_typography" variant="body2" color="textSecondary">{noOfRooms}  {type}</Typography>
                    <Typography className="body_typography" variant="body2" color="textSecondary">{noOfBaths} </Typography>
                    <Typography className="body_typography" variant="body2" color="textSecondary">{noOfKitchen} </Typography>
                    <div id="vendor">
                        
                    </div>
                </CardContent>
            </Card>
        </Grid>
     );
}
 
export default Loading;