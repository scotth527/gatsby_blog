import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Moment from 'react-moment';
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout > 
    <SEO title={frontmatter.title} />
    <div className="container-fluid wrapper">
      <div className="col-9 mx-auto mt-3">
        <div className="blog-post">
          <div alt= {frontmatter.alt} style={{height:"400px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${frontmatter.image})`}} className="mx-auto mb-2 col-12"/>
          <h1>{frontmatter.title}</h1>
          <h2>Written on  <Moment format="MMMM DD, YYYY" date={frontmatter.date} /></h2>
          <p>{"By: " + frontmatter.author}</p>
  
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          </div>
          <p>{frontmatter.description}</p>
      </div>
    </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
    frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        author
        description
        image
        alt
        type
      }
    }
  }
`