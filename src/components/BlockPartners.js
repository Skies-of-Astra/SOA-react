import TitleH1 from "./TitleH1/TitleH1";
import TitleH2 from "./TitleH2/TitleH2";
import Paragraph from "./Paragraph/Paragraph";
import ImgWrapper from "./ImageWrapper/ImgWrapper";
import DividerBlock from "./DividerBlock/DividerBlock";
import AnimationPartners from "./AnimationPartners/AnimationPartners";

const BlockPartners = () => {
  return (
    <div className="default_bg padding-bottom-med padding-top-med position_relative z_index_base">
      <div className="content-width margin-center margin_bottom_large">
        <div id="PARTNER"></div>
        <TitleH1
          cssClass="text_align_center margin_bottom_med animate_parallax"
          label="Team & partners"
        />
      </div>

      <div className="content-width margin-center margin_bottom_med width-60">
        <TitleH2
          cssClass="margin_bottom_2rem animate_parallax"
          label="Team SOA"
        />
        <Paragraph cssClass="margin-center animate_parallax">
          Team SOA are a top group of artists, designers, filmmakers, developers
          and engineers devoted to the craft of visual storytelling and
          immersive environments, with experience spanning Hollywood blockbuster
          VFX, VR, short films, and Web3.
        </Paragraph>
      </div>

      <AnimationPartners />

      <div className="content-width margin-center margin_bottom_med width-60">
        <div className="animate_parallax">
          <h4>Production Studio</h4>
          <h3 className="margin_bottom_2rem">SuperBlimp</h3>
        </div>
        <div className="flex_row">
          <div className="footer_col2">
            <Paragraph cssClass="margin_bottom_2rem animate_parallax">
              SuperBlimp is a multi-award-winning Creative Production Studio
              Specialising in original content for animation/VFX and Live-action
              across commercials, trailers, XR and more.
            </Paragraph>
            <Paragraph cssClass="margin_bottom_med animate_parallax">
              At our heart, we're a group of passionate directors who have
              earned a strong reputation for sharp, focused and compelling work,
              and believe in challenging tried and tested story conventions,
              always looking for interesting ways to excite and inspire with
              visceral imagery and powerful stories.
            </Paragraph>
            <a
              target="_blank"
              href="https://www.superblimp.co.uk"
              rel="noreferrer"
            >
              <button className="button_default button_theme button_hover button_transition margin_bottom_med">
                Checkout our showreel
              </button>
            </a>
          </div>
          <ImgWrapper
            cssClassDiv="footer_col1"
            cssClassImg="align-right width-50 display_block m-maxwidth-25"
            src="assets/img_blimp_logo.png"
          />
        </div>
      </div>
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockPartners;
