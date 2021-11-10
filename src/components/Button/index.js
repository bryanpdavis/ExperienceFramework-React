import React, { useContext } from 'react'

export default props => (
  <div className="button">
    <hr />
    Hi I'm a button component with the title:
    <h2>{props.component.title}</h2>
  </div>
);