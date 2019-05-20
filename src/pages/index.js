import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contactform"
import Banner from "../components/jumbotron"
import BookSwap from "../images/bookswap.gif"

export class IndexPage extends React.Component {
  constructor() {
  		super();
  		this.state = {
  		  project1: false,
  		  project2: false,
  		  project3: false
  		};
  	}
	render() {
		return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container-fluid wrapper">
          <div className="row">
            <div style={{height:"400px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`}} className="col-12 text-dark text-center text-align center mx-auto banner-text">
              <h1 >Welcome to my site! </h1>
              <h2 >My name is Scott, and I'm a Full Stack web developer looking to build cool things</h2>
            </div>
          </div>
          <div className="mx-auto mt-3 mb-3 d-flex justify-content-center">
              <div className="d-flex flex-column text-center">
                  <h2>Always trying to achieve the best version of myself</h2>
                  <p>I'm always looking to learn new technologies. I'm interested in learning new technologies to make better services and build better brands.</p>
              </div>
              <div style={{height:"400px", borderRadius:"50%", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${'../images/professional.jpg'})`}}>
              </div>
          </div>
            <div className="row">
              
              
              
        <div className="col-12 mx-auto d-flex justify-content-around flex-wrap">
             {
                  this.state.project1 ?  <div className="col-lg-3 col-12 text-center border border-dark rounded mb-3" onMouseOut={()=> {this.setState({project1:false})}} ><h3 className="p-4">BookSwap</h3> <button className="btn btn-primary">See Demo</button> <button className="btn btn-success">See code</button></div> : <div onMouseOver={()=> {this.setState({project1:true})}} className="col-lg-3 col-12 border border-dark rounded mb-3">
                  <img src={BookSwap} alt="BookSwap Website"/>
                </div>
                }
                 {
                  this.state.project1 ?  <div className="col-lg-3 col-12 text-center border border-dark rounded mb-3" onMouseOut={()=> {this.setState({project1:false})}} ><h3 className="p-4">BookSwap</h3> <button className="btn btn-primary">See Demo</button> <button className="btn btn-success">See code</button></div> : <div onMouseOver={()=> {this.setState({project1:true})}} className="col-lg-3 col-12 border border-dark rounded mb-3">
                  <img src={BookSwap} alt="BookSwap Website"/>
                </div>
                }
                 {
                  this.state.project1 ?  <div className="col-lg-3 col-12 text-center border border-dark rounded mb-3" onMouseOut={()=> {this.setState({project1:false})}} ><h3 className="p-4">BookSwap</h3> <button className="btn btn-primary">See Demo</button> <button className="btn btn-success">See code</button></div> : <div onMouseOver={()=> {this.setState({project1:true})}} className="col-lg-3 col-12 border border-dark rounded mb-3">
                  <img src={BookSwap} alt="BookSwap Website"/>
                </div>
                }
        </div>
    
          
            </div>
            <Banner /> 
            <Contact />
        </div>
      </Layout>
    );
  }
}
export default IndexPage;
