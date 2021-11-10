import React, { useContext } from 'react'

export default props => (
  <div className="select">
    <hr />
    Hi I'm a select component with the title:
    <h2>{props.component.title}</h2>
  </div>
);

