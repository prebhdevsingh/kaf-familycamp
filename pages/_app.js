import '../styles/all.sass'
import Head from "next/head";
import Layout from '../components/layout'
import Script from 'next/script'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" />

      </Head>
      <Component {...pageProps} />
      {/* <Script src="/script.js"></Script> */}
      {/* <Script type='text/javascript' src='https://widget.freshworks.com/widgets/150000003141.js' async defer></Script> */}
    </Layout>)
}

export default MyApp
