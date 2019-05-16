import React from "react"
import { Link } from "gatsby"
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
        <div className="container">
          <div className="row">
            
          </div>
          <div className="text-center mx-auto d-flex justify-content-around">
            <div>
              <h1 className="mt-3">Hi people</h1>
              <p>Welcome to my page.</p>
              <p>Always on the lookout for cool projects</p>
            </div>
            <div className="border border-dark rounded mx-auto" style={{ width:"40%", borderRadius: "100%" }}>
              <Image />
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
