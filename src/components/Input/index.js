import React, { useContext } from 'react'

const Input = (config) => (
  <div className="input">
    <hr />
    Hi I'm a input component with the title:
    <h2>{config.props.title}</h2>
  </div>
);

export default Input;
