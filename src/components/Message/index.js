import React from 'react';

export const Message = (props) => {
  console.log(props);

  return <h4>HELLO, REACT! {props.text}</h4>;
};
