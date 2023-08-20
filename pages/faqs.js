import React from 'react'
import SEO from '../components/SEO'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostContent from '../components/Content'

const FAQ = ({ frontmatter }) => {
  return (
    <>
      <SEO title='FAQs' />
      <section className="hero has-background-white" >
        <div className=".container.is-fullhd	has-background-light pt-4">
          <div className="columns features py-5 ">
            <div className="column is-8 my-0 mx-0 p-0 ">
              <div className=" m-0 p-0">
                <div className="card-content p-6">
                  <div className="content m-4 px-3 ">
                    <h4 className="is-size-3 has-text-black py-2">
                      {frontmatter?.title}
                    </h4>
                    {
                      frontmatter?.faqs.map((faq, index) => {
                        return (
                          <div key={index}
                            className=" has-text-black py-2 my-5 is-flex is-flex-direction-column	 is-justify-content-center is-align-items-start"
                          >
                            <p className='is-size-4'> {`Q No.${index + 1}: ${faq?.question}`} </p>
                            <p className='is-size-5'>
                              Ans:{faq?.answer}
                            </p>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(path.join('content', 'faqs' + '.md'), 'utf-8')
  const { data: frontmatter, } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter: {
        ...frontmatter,
      },
    },
  }
}