// import Search from "./search/Search"
// import TopLanding from "./topLanding/TopLanding"
// import Properties from './properties/Properties'
// import styles from './home.module.css'

import TopLanding from '../components/topLanding/TopLanding';
import Search from '../components/search/Search';
import Properties from '../components/properties/Properties'
import styles from './index.module.css'

const Home = () => {
    return ( 
        <div className={styles.container}>
            <TopLanding/>
            <br/>
            <Search/>
            <Properties/>
        </div>
     );
}
 
export default Home;