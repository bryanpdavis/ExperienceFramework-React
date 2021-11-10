import React, { useContext } from 'react'

export default props => (
  <div className="input">
    <hr />
    Hi I'm a input component with the title:
    <h2>{props.component.title}</h2>
  </div>
);
