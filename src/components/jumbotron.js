import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "gatsby"

const Banner = (props) => {
  return (
    <div className="mt-3 mb-3 col-10 mx-auto" >
      <Jumbotron>
        <h1 className="display-3">Read my thoughts</h1>
        <p className="lead">Besides coding, I like to write out my thoughts, work process, and how I'm feeling.</p>
        <hr className="my-2" />
        <p className="lead pt-3">
          <Link to="/blog"><Button alt="Link to blog" color="primary">Check out my blog</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Banner;