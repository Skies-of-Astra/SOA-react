/**
 *
 * @param {{cssClass:string, label:string, tagID:string}} props
 */

const TitleH3 = (props) => {
  return <h3 className={props.cssClass}>{props.label}</h3>;
};

export default TitleH3;
