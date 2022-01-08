import {Container, Grid, Card, Typography, CardMedia, CardContent} from '@material-ui/core'
import styles from './properties.module.css'
import Property from './property/Property'
// import CardImage from '../../../img/propImage/cardImage.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import { fetchProperties } from '../../../redux/actions/propertyActions'
import { fetchProperties } from '../../redux/actions/propertyActions';
import Loading from './loading/Loading';
import Link from 'next/link';
import * as api from '../../redux/api/api';


const Properties = ({ data }) => {

    let properties = data;

    const dispatch = useDispatch()
    // console.log(properties)
    useEffect(()=>{
        dispatch(fetchProperties())
    },[dispatch])

     properties = useSelector((result) => result.propertyReducer.data)
    console.log(properties)
    
    // console.log(properties)
    if(typeof properties == undefined){
        setInterval(() => {
            console.log('Fetching Properties')
            dispatch(fetchProperties())
        },2000);
    }
    
    return ( 
        <div className={styles.cover}>
        <Container >
            <Grid container spacing={2}>
                { properties ? (
                    properties.map((property)=>(         
                        <Property   
                            key={property._id}
                            href={`/property/${property.title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase()}-${property._id}`}                           
                            image={property.images[0]}
                            price={property.price.toString()}
                            title={property.title}
                            state={property.state}
                            location={property.location}
                            noOfRooms={property.noOfRooms}
                            type={property.type}
                            noOfBaths={property.noOfBaths}
                        />
                    ))
                    ) : (                
                        <>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                            <Loading/>
                        </>                        
                    ) 
                }
                
            </Grid>
        </Container>
        </div>
    );
}

 
export default Properties;