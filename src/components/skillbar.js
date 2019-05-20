import React from 'react';
import { Progress } from 'reactstrap';

const Skillbar = (props) => {
  return (
    <div className="text-center">
      <h2>My Stack</h2>
      {
          props.skills.map((item,index) => {
          
              return (
                <div key = {index}>
                  <div className="text-center">{item.tech}</div>
                  <Progress color={item.color} value={item.percent} />
                </div>
              );
          })
      }
    </div>
  );
};

export default Skillbar;