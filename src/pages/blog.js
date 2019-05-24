import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCards from "../components/blogcards"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div style={{height:"400px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`}} className="col-12 text-dark text-center text-align center mx-auto banner-text">
        <h1 >All amazing things start with an idea</h1>
    </div>
              
    <div className="row">
        <div className="col-12 mx-auto d-flex justify-content-around flex-wrap">
        {
            data.allMarkdownRemark.edges.map((item,index)=> {
                return (
                <BlogCards key={index} image={item.node.frontmatter.image} alt={item.node.frontmatter.alt} title={item.node.frontmatter.title} author={item.node.frontmatter.author} description={item.node.frontmatter.description} url={item.node.frontmatter.path}  date={item.node.frontmatter.date} />
            );
            })
        }
        </div>
    </div> 
   
    
  </Layout>
);

export default SecondPage;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq : "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC}
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        description
                        author
                        image
                        alt
                        type
                    }
                }
            }
        }
    }
  `