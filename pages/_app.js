import '../styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store/store';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
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
