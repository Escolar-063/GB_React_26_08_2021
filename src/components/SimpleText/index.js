import React from 'react';

export const SimpleText = (props) => {
  console.log(props);

  return <h3>HELLO REACT, {props.name}, {props.age}</h3>;
};
