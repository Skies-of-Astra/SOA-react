/**
 *
 * @param {{cssClass: string, label: string}} props
 */

const Button = (props) => {
  return <button className={props.cssClass}>{props.label}</button>;
};

export default Button;
