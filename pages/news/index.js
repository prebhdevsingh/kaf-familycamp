import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import SEO from "../../components/SEO";
export default function Home({ posts }) {
  return (
    <>
      <SEO title="News" />
      <section className="section">
        <div className="container" style={{ maxWidth: "640px" }}>
          <div className="content pt-5 ">
            <h1 className="has-text-centered">News</h1>
            {posts &&
              posts?.map((post) => (
                <div key={post.id}>
                  <article className={`blog-list-item tile is-child    py-3`}>
                    <header>
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <Image
                            src={post.frontmatter.featuredimage}
                            width={900}
                            height={800}
                            alt={post.frontmatter.title}

                          />
                        </div>
                      ) : null}
                    </header>
                    <h2>
                      <Link
                        className=" has-text-dark is-size-2 has-font-weight-bold"
                        href={`/news/${post.slug}`}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="pt-3 body-text">
                      {post.frontmatter.description}
                    </p>

                    <span className=" is-block date-text	">
                      {new Date(post.frontmatter.date).toDateString()}
                    </span>

                    <Link
                      className="button is-small is-black "
                      href={`/news/${post.slug}`}
                    >
                      Read more
                    </Link>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("news"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("news", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date.toISOString(),
      },
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

