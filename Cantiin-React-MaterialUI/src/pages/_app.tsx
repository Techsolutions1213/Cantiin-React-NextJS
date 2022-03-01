import Layout from '../components/Layout';





export default function MyApp({ Component, pageProps }){
  console.log("component", Component)
  console.log("pageProps", pageProps)

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}