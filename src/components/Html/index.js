import Components from '../../components/ExperienceBase';

const Html = (props) => {
  const {children, tag, innerText, ...rest} = props;
  const componentType = tag;
  return (<props.tag {...rest}>
      {children}
      {innerText}
    </props.tag>)
}

export default Html;
