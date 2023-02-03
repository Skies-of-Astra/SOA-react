import TitleH1 from "./TitleH1/TitleH1";
import Paragraph from "./Paragraph/Paragraph";
import ImgWrapper from "./ImageWrapper/ImgWrapper";
import DividerBlock from "./DividerBlock/DividerBlock";
import ButtonImage from "./ButtonImage";

const BlockCharacters = (props) => {
  return (
    <div className="parallax_block z_index_base position_relative padding-top-med">
      <div id="CLASSES"></div>
      <div className="content-width margin-center animate_parallax m_p_large m-margin-bottom-large">
        <TitleH1 cssClass="text_align_center" label="Character Classes" />
        <Paragraph cssClass="text_align_center margin_bottom_med margin-center">
          There are 5 different classes, each with its own distinctive
          attributes.
        </Paragraph>
        <div className="m_flex_row overflow_hidden margin_bottom_large m-flex-wrap-on flex-justify-center">
          <ButtonImage
            callBack={props.callBack}
            imageURL="assets/img_nighflyer.png"
            index={0}
          />
          <ButtonImage
            callBack={props.callBack}
            imageURL="assets/img_astrian.png"
            index={1}
          />
          <ButtonImage
            callBack={props.callBack}
            imageURL="assets/img_creep.png"
            index={2}
          />
          <ButtonImage
            callBack={props.callBack}
            imageURL="assets/img_rogue.png"
            index={3}
          />

          <ButtonImage
            callBack={props.callBack}
            imageURL="assets/img_lost.png"
            index={4}
          />
        </div>
        <ImgWrapper
          tagID=""
          cssClassDiv="img_parallax_block"
          cssClassImg="display_block margin-center"
          src="assets/img_dream.png"
        />
      </div>
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockCharacters;
