/**
 *
 * @param {{cssClassImg: string, tagID: string, cssClassDiv: string, src: string}} props
 */

const ImgWrapper = (props) => {
  return (
    <div id={props.tagID ? props.tagID : ""} className={props.cssClassDiv}>
      <img className={props.cssClassImg} src={props.src} alt="container" />
    </div>
  );
};

export default ImgWrapper;
