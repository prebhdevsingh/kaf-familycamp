import React from 'react'
import Head from 'next/head'

function SEO({title}) {
  return (
    <Head>
    <title>{`${title || ""}  Sikh Youth Coding Initiative- 2024 Program`}</title>
  </Head>
  )
}

export default SEO