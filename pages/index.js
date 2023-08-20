import React from "react";
import Cards from "../components/view/home/Cards";
import Parallex from "../components/view/home/Parallex";
import Registration from "../components/view/home/Registration";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const Home = ({ frontmatter }) => {

  return (
    <div className="relative">
      <Parallex
        {...frontmatter}
      />
      <Cards id='#about' />
      <Registration  {...frontmatter} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(path.join('content', 'index' + '.md'), 'utf-8')
  const { data: frontmatter, } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter: {
        ...frontmatter,
      },
    },
  }
}