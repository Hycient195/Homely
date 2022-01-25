import '../styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store/store';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    console.log('the per page')
    return(
      <ReduxProvider store={store}>
        {/* <div style={{height: "80px"}}></div> */}
        {
          Component.getLayout(<Component {...pageProps} />)
        }
      </ReduxProvider>
    )
  }
  return(
    <>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </>
  )


}

export default MyApp
