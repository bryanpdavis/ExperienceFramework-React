import React, { useContext } from 'react'

const Checkbox = (config) => (
  <div className="checkbox">
    <hr />
    Hi I'm a checkbox component with the title:
    <h2>{config.props.title}</h2>
  </div>
);

export default Checkbox;
