// import Search from "./search/Search"
// import TopLanding from "./topLanding/TopLanding"
// import Properties from './properties/Properties'
// import styles from './home.module.css'

import TopLanding from '../components/topLanding/TopLanding';
import Search from '../components/search/Search';
import Properties from '../components/properties/Properties'
import styles from './index.module.css'
import * as api from '../redux/api/api';
import store from '../redux/store/store'
// import {wrapper} from '../redux/store/store'


const Home = ({ properties }) => {
    console.log(`${properties} from index page`)
    return (
        <div className={styles.container}>
            <TopLanding/>
            <br/>
            <Search/>
            <Properties data={properties}/>
        </div>
     );
}

export const getServerSideProps = async () =>{
    const properties = await api.fetchProperties()
    console.log(properties)

    return{
        props : {
            properties : properties.data
        }
    }
}

 
export default Home;