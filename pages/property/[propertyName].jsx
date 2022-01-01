import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSingleProperty } from '../../redux/actions/propertyActions';
import { Typography } from '@material-ui/core';

export default function ({ propertyName, _id }){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSingleProperty(propertyName, _id))
    },[])

    const property = useSelector((result) => result.propertyReducer.data)
    console.log(property?.title)

    return(
        <>
          {
            property &&
            <>
            <Typography variant='h5'>Title : {property.title} </Typography>
            <Typography variant='h5'>Type : {property.type} </Typography>
            <Typography variant='h5'>State of Location : {property.state} </Typography>
            <Typography variant='h5'>Location : {property.location} </Typography>
            <Typography variant='h5'>Size : {property.size} </Typography>
            <Typography variant='h5'>Number of rooms : {property.noOfRooms} </Typography>
            <Typography variant='h5'>Price : {property.price} </Typography>
            <Typography variant='h5'>Landmark : {property.landmark} </Typography>
            <Typography variant='h5'>Description : {property.description} </Typography>
            <Typography variant='h5'>Furnishing : {property.furnishing} </Typography>
            <Typography variant='h5'>Number of Bathrooms {property.bathrooms} </Typography>
            <Typography variant='h5'>Number of parking lots {property.parkingSpace} </Typography>
           {
               property.keywords &&
               property.keywords.map((keyword)=>(
                <Typography variant="h3" key={keyword}>{keyword}</Typography>
               ))
           }
           {
               property.images &&
               property.images.map(image =>(
                <img src={image} height="450" width="720" alt={property.description}/>
               ))
           }
            </>
          }
           
        </>
    )
}

export const getServerSideProps = async (context) =>{
    const { params, query } = context;
    const { propertyName } = params;
    const { _id } = query;

    return{
        props : {
            propertyName,
            _id
        }
    }
}