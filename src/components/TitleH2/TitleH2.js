/**
 *
 * @param {{cssClass:string, label:string, tagID:string}} props
 */

const TitleH2 = (props) => {
  return (
    <h2 id={props.tagID} className={props.cssClass}>
      {props.label}
    </h2>
  );
};

export default TitleH2;
