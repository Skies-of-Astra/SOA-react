/**
 *
 * @param {{cssClass:string, src:string}} props
 */

const DividerBlock = (props) => {
  return <img src={props.src} className={props.cssClass} alt="divider" />;
};

export default DividerBlock;
