import React, { FunctionComponent, ReactNode } from 'react'
import Components from '../Components';


function renderTree(props) {
  const pType = (props.type !== undefined ? props.type.toLowerCase() : props.tag)
  return React.createElement(Components[pType] !== undefined ? Components[pType] : Components['html'], props, props.children.map(child => {
    const cType = (child.type !== undefined ? child.type.toLowerCase() : child.tag)
    return React.createElement(Components[cType] !== undefined ? Components[cType] : Components['html'], child, 
      child.children !== undefined ? renderTree(child.children) : null)
  }))
}

const ExperienceBase = (props) => {
  return renderTree(props)
}

export default ExperienceBase;