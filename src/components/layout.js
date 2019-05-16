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
          <footer className="text-center pb-2 pt-2">
            Follow me on 
            <a className="ml-1 mr-1" target="_blank" href="https://github.com/scotth527">Github</a>
            <a className="ml-1 mr-1" target="_blank" href="https://www.linkedin.com/in/scotth527/">Linkedin</a>
            <a className="ml-1 mr-1" target="_blank" href="https://stackoverflow.com/users/11364096/scotth527?tab=profile">Stack Overflow</a>
          </footer>
       
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
