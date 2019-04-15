import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 style={{backgroundColor: 'green'}}>Hi from the 3rd page</h1>
    <p>Third page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage