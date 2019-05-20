import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skillbar from "../components/skillbar"
import Profilepic from "../images/professional.jpg"

const About = ({ data }) => {
    
  let info = data.allMarkdownRemark.edges[0].node.frontmatter;
  console.log  (info);
  const skills = [
      {
      tech:"Javascript", color:"success" , percent:98
      },
      {
      tech:"HTML/CSS", color:"info" , percent:98
      },
      {
      tech:"React", color:"warning" , percent:95
      },
      {
      tech:"Django/Python", color:"secondary" , percent:75
      },
      {
      tech:"Jest/Unit Testing", color:"danger" , percent:65
      },
      {
      tech:"SQL", color:"primary" , percent:65
      },
  ];
  return (
      <Layout>
        <SEO title="Page two" />
        {/* <h1 style={{backgroundColor: 'green'}}>{data.site.siteMetadata.title}</h1> */}
        <div className="container-fluid wrapper">
            <div className="row">
                <div className="col-lg-9 col-12 mt-3 mx-auto text-center">
                    <img src={Profilepic} alt="Professional Pic" style={{borderRadius: "50%", width:"250px", height:"250px"}} />
                    <h1>{info.title}</h1>
                    <p>{info.description}</p>
                </div>
            </div> 
            <div className="row mb-3 d-flex justify-content-center">
                <div className="col-lg-6 col-12 mr-auto">
                    <h2>Hobbies</h2>
                    <ul>
                        {
                            info.facts.map((item,index) => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <Skillbar skills={skills}/> 
                </div>
            </div>
        </div>
      </Layout>
);
};
export default About;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { path: { eq : "/about-me" } } }
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
                        facts
                    }
                }
            }
        }
    }
  `