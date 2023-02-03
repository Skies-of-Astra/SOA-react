/**
 *
 * @param {{cssClass: string, src: string, subTitle: string, title: string}} props
 */

const CardCircle = (props) => {
  return (
    <div className="flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small">
      <img className="margin_bottom_2rem" src={props.src} alt="circle" />
      <div className="text_align_center">
        <h4 className="margin_bottom_XS">{props.subTitle}</h4>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default CardCircle;
