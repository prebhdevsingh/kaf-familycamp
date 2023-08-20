import React from 'react'
import SEO from '../components/SEO'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostContent from '../components/Content'

const VirtualKFR = ({ frontmatter, content }) => {
  return (
  <>
    <SEO title='Virtual Talks' />
    <div class="container " style={{
      paddingTop: "5rem"
    }}>
      <section class="hero  is-white">
        <div class="hero-body">
          <div class="container has-text-left">

            <h1 class=" is-size-2">{
              frontmatter?.title
            }</h1>

            <div className='py-3'>
              <PostContent className='has-text-left	' content={content} />
            </div>


          </div>
        </div>

      </section>
    </div></>
  )
}

export default VirtualKFR
export async function getStaticProps({ params }) {
  console.log("params______", params)
  const markdownWithMeta = fs.readFileSync(path.join('content', 'virtualkfr' + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  console.log("frontmatter", frontmatter)
  return {
    props: {
      frontmatter: {
        ...frontmatter,
      },
      content,
    },
  }
}