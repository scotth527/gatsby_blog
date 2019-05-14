import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

export class IndexPage extends React.Component {
  constructor() {
  		super();
  		this.state = {};
  	}
	render() {
		return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to my page.</p>
        <p>Always on the lookout for cool projects</p>
        <div className="border border-dark rounded" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ul>
          <li><Link to="/page-2/">Go to page 2</Link></li>
          <li><Link to="/blog/my-first-post" >Go to first blog </Link></li>
          <li><Link to="/blog/my-second-post" >Go to second blog </Link></li>
        </ul>
      </Layout>
    );
  }
}
export default IndexPage;
