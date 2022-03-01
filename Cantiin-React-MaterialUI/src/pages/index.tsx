import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import awsExports from '../aws-exports'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
//import styles from '../styles/Home.module.css'

Amplify.configure({ ...awsExports, ssr: true })

export default function Home({  }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >Amplify + Next.js</h1>

        <p >
          Todos
        </p>

        <div >
          <div >
            <h3>New Todo</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {



  return {
    props: {
    },
  }
}
