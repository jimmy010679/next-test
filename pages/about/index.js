import Head from 'next/head'

import Layout from '/components/layout'
import NestedLayout from '/components/nested-layout'

import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>About</h1>
      <ul>
        <li>
          <Link href="/post/1">
            <a>1</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
