import React from 'react';

const ProjectCards = (props) => {
  return (
    <div style={{height:"200px"}} className="col-lg-3 col-12 text-center border border-dark rounded mb-3" onMouseOut={()=> props.function} >
        <h3 className="p-4">{props.title}</h3>
        <div className="pb-3">
          <a href={props.demo}><button className="btn btn-primary">See Demo</button></a>
          <a href={props.code}><button className="btn btn-success">See code</button></a>
        </div>
    </div> 
  );
};

export default ProjectCards;