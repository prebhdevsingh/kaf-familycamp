import React from 'react'
import SEO from '../components/SEO'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {HTMLContent} from '../components/Content'
import {marked} from 'marked'
const Donate = ({ frontmatter, content }) => {
  return (<>
    <SEO title='Donate Us' />
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
            <HTMLContent className='has-text-left	' content={marked(content)} />
            </div>
            <div class="column has-text-left">
              <p>
                <button class="button is-medium is-primary is-contained" type="submit" value="Submit">

                  <span>Donate Now </span>
                </button>
              </p>

            </div>
          </div>
        </div>

      </section>
    </div></>
  )
}

export default Donate
export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(path.join('content', 'donate' + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter: {
        ...frontmatter,
      },
      content,
    },
  }
}