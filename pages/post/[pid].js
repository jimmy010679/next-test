//import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '/components/layout'
import NestedLayout from '/components/nested-layout'

const Post = ({ data }) => {

  //const router = useRouter()
  //const { pid } = router.query

  console.log(data)
  

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Post:{data.params.pid}</p>
    </>
  )
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
        <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}  

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    //const res = await fetch(`https://.../data`)
    //const data = await res.json()
  
    const params = context.params;

    return { 
        props: {
            data: {
                params: params,
                data: {
                    title: "JIMMY"
                }
            }
        } 
    }
  }

export default Post