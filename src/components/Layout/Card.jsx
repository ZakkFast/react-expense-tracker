import './Card.css';

const Card = (props) => {
  // Inherit the classes from the children by props
  const classes = 'card ' + props.className;
  // Return the children with the class
  return <div className={classes}>{props.children}</div>;
};

export default Card;
