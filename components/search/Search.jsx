import { FormControlLabel, FormLabel, Typography, Grid, Container, FormControl, TextField } from '@material-ui/core'
import styles from './search.module.css';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortByParameter, searchProperties } from '../../redux/actions/propertyActions';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Search = () => {
    const properties = useSelector((result)=> result.propertyReducer.data)
    console.log(properties)

   

    const dispatch = useDispatch()

    /** State Variables */
    const [ price, setPrice ] = useState();
    const [ state, setState ] = useState();
    const [ type, setType ] = useState();
    const [ searchQuery, setSearchQuery ] = useState();
    const [ loading, setLoading ] = useState({ 
        searchLoading : false, typeLoading : false, priceLoading : false, stateLoading : false
    });

    // if(properties){
    //     setLoading(true)
    // }
    
    /* Sorting by State location of the property */
    const handleStateChange = (e) =>{
        const data = {
            parameter : 'state',
            value : e.target.value
        }

        setLoading({ stateLoading : true })
        // console.log(data)
        dispatch(sortByParameter(data))

        if(properties){
            setTimeout(() => {
                setLoading({ stateLoading : false })
            }, 2000);
        }
    }

    /* Sorting by Type of the property */
    const handleTypeChange = (e) =>{
        const data = {
            parameter : 'type',
            value : e.target.value
        }

        setLoading({ typeLoading : true })
        // console.log(data)
        dispatch(sortByParameter(data))

        if(properties){
            setTimeout(() => {
                setLoading({ typeLoading : false })
            }, 2000);
        }
    }

    /* Sorting by Price range of the property */
    const handlePriceChange = () =>{

        setLoading({ typeLoading : true })
       
        if(properties){
            setTimeout(() => {
                setLoading({ typeLoading : false })
            }, 2000);
        }
    }

    /** Handler for Search requests */
    const handleSearch = (e) =>{
        const data = {
            query : e.target.value
        }

        setLoading({ searchLoading : true })
        // console.log(data)
        dispatch(searchProperties(data))

        if(properties){
            setTimeout(() => {
                setLoading({ searchLoading : false })
            }, 2000);
        }
    }


    return ( 
        <div id={styles.contain} >

                {/* Search Bar */}
            <form id={styles.search_container} >
                <TextField 
                    className={styles.search}
                    label="Search" 
                    value={searchQuery} 
                    onChange={ handleSearch } 
                    id='text-field' 
                    fullWidth 
                    variant="standard"/>
                {
                    loading.searchLoading &&
                    <Box sx={{ width : '100%' }}>
                        <LinearProgress/>
                    </Box>
                }
            
            </form>

            <div id={styles.sorting}>
                <Container id={styles.sorting_container}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h4">
                                Type    
                                <br/>
                                <select onChange={handleTypeChange} value={type} className={styles.sort_option} name="" id="">
                                    <option value="duplex">Duplex</option>
                                    <option value="flat">Flat</option>
                                    <option value="selfContain">Self Contained</option>
                                    <option value="singleRoom">Single Room</option>
                                    <option value="terraced">Terraced</option>
                                </select>
                                {
                                    loading.typeLoading &&
                                    <Box sx={{ width : '50%', margin: '0 auto' }} >
                                        <LinearProgress/>
                                    </Box>
                                }
                            </Typography>
                            
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h4">
                                Prices
                                <br/>
                                <select onChange={handlePriceChange} value={price} className={styles.sort_option} name="" id="">
                                    <option value="">Select Range</option>
                                    <option value="">1,000,000 - 10,000,000</option>
                                    
                                </select>
                                {
                                    loading.priceLoading &&
                                    <Box sx={{ width : '50%',  margin: '0 auto' }}>
                                        <LinearProgress/>
                                    </Box>
                                }
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h4">
                                State
                                <br/>
                                <select onChange={handleStateChange} value={state} className={styles.sort_option} name="" id="">
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
                                {
                                    loading.stateLoading &&
                                    <Box sx={{ width : '50%',  margin: '0 auto'  }}>
                                        <LinearProgress/>
                                    </Box>
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>           
            </div>
            
        </div>
     );
}
 
export default Search;