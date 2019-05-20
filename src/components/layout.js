import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MyNavbar from "./navbar.js"
import "./layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
            <a className="ml-1 mr-1 text-dark" rel="noopener noreferrer" target="_blank" href="https://github.com/scotth527"><FontAwesomeIcon size="2x" icon={faGithub} /></a>
            <a className="ml-1 mr-1 text-dark" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/scotth527/"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
            <a className="ml-1 mr-1 text-dark" rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/users/11364096/scotth527?tab=profile"><FontAwesomeIcon size="2x" icon={faStackOverflow} /></a>
            <p>Scott Huang © 2019</p>
          </footer>
       
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
