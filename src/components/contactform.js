import React from 'react';
import PropTypes from "prop-types";
  
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  
  render() {
    return (
    <div>
        <form className="text-center" action="https://formspree.io/scottyh527@gmail.com" method="POST">
            <h1>Contact Me</h1>
            <div className="col-6 mx-auto d-flex flex-column">
                <input className="mb-3" type="email" name="_replyto" placeholder="Your email"/>
                <input className="mb-3" type="text" name="name" placeholder="Your message"/>
                <input className="mb-3" type="submit" value="Send"/>
            </div>
        </form>
    </div>
    );
  }
}

