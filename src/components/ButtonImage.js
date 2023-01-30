import ImgWrapper from "./ImgWrapper";
import ActionClick from "./ActionClick";

const ButtonImage = (props) => {
  return (
    <>
      <ActionClick
        cssClass="soa_image_carousel animate_parallax carousel_chars"
        callBack={props.callBack}
        callBackArgs={props.index}
      >
        <ImgWrapper
          tagID={props.index}
          cssClassDiv=""
          cssClassImg=""
          src={props.imageURL}
          key={props.index}
        />
      </ActionClick>
    </>
  );
};

export default ButtonImage;
