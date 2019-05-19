import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contactform"
import Banner from "../components/jumbotron"

export class IndexPage extends React.Component {
  constructor() {
  		super();
  		this.state = {};
  	}
	render() {
		return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container-fluid wrapper">
          <div className="row">
            <div style={{height:"400px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundImage: `url(${'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`}} className="col-12 text-dark text-center text-align center mx-auto">
              <h1 className="banner-text mt-5">Welcome to my site! </h1>
              <h2 className="banner-text mt-5">I'm a Junior developer looking to build cool things</h2>
            </div>
          </div>
          <div className="text-center mx-auto mt-3 mb-3 d-flex justify-content-center">
            <div>
              <h1 className="mt-3">Hi people</h1>
              <p>Welcome to my page.</p>
              <p>Always on the lookout for cool projects</p>
            </div>
            <div className="border border-dark rounded mx-auto" style={{ width:"40%", borderRadius: "100%" }}>
              <Image />
            </div>
          </div>
            <div className="text-center">
              <h2>Projects</h2>
            </div>
            <Banner /> 
            <Contact />
        </div>
      </Layout>
    );
  }
}
export default IndexPage;
