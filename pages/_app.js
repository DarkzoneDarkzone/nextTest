import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* header */}
      <Head>
        <title>Test Next</title>
      </Head>
      {/* navigation bar */}
      <Nav/>
      {/* component */}
      <div className="main-content">
        <Component {...pageProps} />
      </div>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default MyApp
