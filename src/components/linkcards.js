import React from 'react';

const LinkCards = (props) => {
  return (
    <div style={{height:"400px"}} className="col-lg-4 col-12 text-center border border-dark rounded mb-3 p-0" onMouseOut={() => props.function}>
        <h3 className="p-4">{props.title}</h3>
        <div className="pb-3">
          <a href={props.demo}><button className="btn btn-primary mr-2">See Demo</button></a>
          <a href={props.code}><button className="btn btn-success">See code</button></a>
        </div>
    </div> 
  );
};

export default LinkCards;