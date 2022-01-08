import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSingleProperty } from '../../redux/actions/propertyActions';
import { Typography } from '@material-ui/core';
import * as api from '../../redux/api/api';
import { useRouter } from 'next/router';

export default function ({ property }){
    const router = useRouter();
    // console.log(router.query)
    if(router.isFallback){
        return(
            <h2>Loading...</h2>
        )
    }
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchSingleProperty(propertyName, _id))
    // },[])

    // const property = useSelector((result) => result.propertyReducer.data)
    // console.log(property?.title)

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

export const getStaticPaths = async ( context ) =>{
    // const { params, query } = context;
    // const { propertyName } = params;
    // const { _id } = query;

    // console.log(params)
    const properties = await api.fetchProperties();
    // console.log(JSON.parse(properties.data))
    const property = properties.data.map((property)=>{
        // console.log(property._id)
        return{
            params : {
                propertyName : `${property.title?.replace(/\s+/g, '-')?.replace(/,/g, '')?.toLowerCase()}-${property._id}`,
            }
        }
    })
    // console.log(property)
    // const property = await res.json();
    return{
        paths : property,
        fallback : true
    }
}

export const getStaticProps = async (context) =>{
    const { params } = context;
    const { propertyName,  } = params;
    const _temp_id = propertyName.split("-")
    const _id = _temp_id[_temp_id.length -1]
    console.log(_id)
    // const { _id } = query;
    // const _id = propertyName.split('?')[1]

    const property = await api.fetchSingleProperty(propertyName, _id);
    console.log()
    return{
        props : {
            property : property.data
        }
    }
}