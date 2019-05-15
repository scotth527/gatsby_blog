import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    {/* <h1 style={{backgroundColor: 'green'}}>{data.site.siteMetadata.title}</h1> */}
    <ul>
        {
            data.allMarkdownRemark.edges.map((item,index)=> {
                return (
                <Link to={item.node.frontmatter.path}><li>{"Take me to " + index + "blog"}</li></Link>
            );
            })
        }
        
    </ul>
    <p>Welcome to page 2</p>
    <Link to="/page-3">Go to page 3/ </Link>
  </Layout>
)

export default SecondPage;

export const query = graphql`
  query {
   allMarkdownRemark {
    edges {
        node {
            frontmatter {
                path
            }
        }
    }
   }
  }
  `