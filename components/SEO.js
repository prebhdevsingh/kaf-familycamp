import React from 'react'
import Head from 'next/head'

function SEO({title}) {
  return (
    <Head>
    <title>{`${title || ""}  Khalsa Family Retreat`}</title>
  </Head>
  )
}

export default SEO