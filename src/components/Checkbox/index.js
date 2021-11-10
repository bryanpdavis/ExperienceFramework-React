import React, { useContext } from 'react'

export default props => (
  <div className="checkbox">
    <hr />
    Hi I'm a checkbox component with the title:
    <h2>{props.component.title}</h2>
  </div>
);
