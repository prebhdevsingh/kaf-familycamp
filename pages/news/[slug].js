import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import PostContent from '../../components/Content'
import SEO from '../../components/SEO'
export default function PostPage({
    frontmatter: { title, date, featuredimage, categories, tags },
    slug,
    content,
}) {
    return (<>
        <SEO title={title} />
        <section className="section">
            <div className="container" style={{ maxWidth: "860px" }}>
                <div className='py-4'>
                    {featuredimage ? (
                        <div className="featured-thumbnail pb-5">
                            <Image
                                src={featuredimage}
                                width={850}
                                height={800}
                                alt={title}
                            />
                        </div>
                    ) : null}
                    <h1 className="is-size-2 has-text-dark post-heading pt-3">{title}</h1>

                    <div>
                        <p className='is-size-7	is-italic	'>{new Date(date).toDateString()}</p>
                    </div>
                    <div className='py-3'>
                    <PostContent className='has-text-left	' content={content} />

                    </div>


                </div>
            </div>
        </section>
    </>

    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('news'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('news', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter: {
                ...frontmatter,
                date: frontmatter.date.toISOString(),
            },
            slug,
            content,
        },
    }
}