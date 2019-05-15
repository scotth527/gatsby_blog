import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contactform"

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
          <div className="text-center d-flex">
            <div>
              <h1 className="mt-3">Hi people</h1>
              <p>Welcome to my page.</p>
              <p>Always on the lookout for cool projects</p>
            </div>
            <div className="border border-dark rounded mx-auto" style={{ borderRadius: "100%" }}>
              <Image />
            </div>
          </div>
            <h2>See my thoughts</h2>
            <ul>
              <li><Link to="/page-2/">Go to page 2</Link></li>
              <li><Link to="/blog/my-first-post" >Go to first blog </Link></li>
              <li><Link to="/blog/my-second-post" >Go to second blog </Link></li>
            </ul>
            <Contact />
        </div>
      </Layout>
    );
  }
}
export default IndexPage;
