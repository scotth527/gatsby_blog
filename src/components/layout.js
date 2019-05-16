import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MyNavbar from "./navbar.js"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
    <div>
        <div style={{}}>
          <MyNavbar title={data.site.siteMetadata.title}/>
        </div>
        
        
        
          <main>{children}</main>
          <footer className="text-center">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
       
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
