import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contactform"
import Banner from "../components/jumbotron"
import BookSwap from "../images/bookswap.gif"
import LinkCards from "../components/linkcards"
import { graphql } from "gatsby"
import ProjectCards from "../components/projectcard"
import Professional from "../images/professional.jpg"
import Todo from "../images/todo.gif"
import Meetup from "../images/meetup.gif"

export class IndexPage extends React.Component {
  constructor() {
  		super();
  		this.state = {
  		  project0: false,
  		  project1: false,
  		  project2: false
  		};
  	}
	render() {
	  console.log(this.props.data);
	  const gifs = [BookSwap, Meetup, Todo];
		return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container-fluid wrapper">
          <div className="row">
            <div style={{minHeight:"400px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`}} className="col-12 text-dark text-center text-align center mx-auto banner-text">
              <h1 >Welcome to my site! </h1>
              <h2 >My name is Scott, and I'm a Full Stack web developer looking to build cool things</h2>
            </div>
          </div>
          <div className="mx-auto mt-3 mb-3 d-flex justify-content-center flex-wrap">
              <div className="col-lg-6 col-12 d-flex flex-column text-center">
                  <h2>Always trying to achieve the best version of myself</h2>
                  <p>I'm always looking to learn new technologies. I'm interested in learning new technologies to make better services and build better brands.</p>
              </div>
              <div style={{maxHeight:"250px", maxWidth:"250px", borderRadius:"50%", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${Professional})`}}>
              </div>
          </div>
            <div className="mx-auto text-center">
              <h1 id="projects">Projects</h1>
            </div>
            <div className="row">
               
              
              
              <div className="col-12 mx-auto d-flex justify-content-around flex-wrap text-center">
                  
                   {
                   
                      this.props.data.allMarkdownRemark.edges.map((item,index)=> {
                        return (
                        this.state["project" + index] ?  
                          <LinkCards description={item.node.frontmatter.description} key={item.node.frontmatter.title} title={item.node.frontmatter.title} demo={item.node.frontmatter.demo} code={item.node.frontmatter.repository} function={() => this.setState({["project" + index]:false})}/>
                          : 
                          <ProjectCards key={item.node.frontmatter.title} change={()=>this.setState({["project" + index]:true})} gif={gifs[index]}/>);
                      })
                      
                        
                   }
              </div>
    
          
            </div>
            <Banner /> 
            <div id="contact">
              <Contact />
            </div>
        </div>
      </Layout>
    );
  }
}
export default IndexPage;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq : "project" } } }
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
                        demo
                        repository
                    }
                }
            }
        }
    }
  `