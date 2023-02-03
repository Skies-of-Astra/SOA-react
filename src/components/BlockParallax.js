import ImgWrapper from "./ImageWrapper/ImgWrapper";
import DividerBlock from "./DividerBlock/DividerBlock";

const BlockParallax = () => {
  return (
    <div className="parallax_block position_relative z_index_base">
      <ImgWrapper
        tagID=""
        cssClassDiv="img_parallax_block"
        cssClassImg="display_block margin-center"
        src="assets/img_dream.png"
      />
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockParallax;
