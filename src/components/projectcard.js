import React from 'react';

const ProjectCards = (props) => {
  return (
      <div style={{minHeight:"400px"}} onMouseOver={()=> props.change()} className=" col-lg-4 col-12 border border-dark rounded mb-3 p-0">
          <img style={{width:"100%", height:"100%"}} src={props.gifs} alt="BookSwap Website"/>
      </div>
  );
};

export default ProjectCards;