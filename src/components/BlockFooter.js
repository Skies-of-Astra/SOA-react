import ImgWrapper from "./ImageWrapper/ImgWrapper";
import DividerBlock from "./DividerBlock/DividerBlock";
import Paragraph from "./Paragraph/Paragraph";
import TitleH3 from "./TitleH3/TitleH3";

const BlockFooter = () => {
  return (
    <div className="soa_footer default_bg position_relative">
      <div className="m_flex_row position_relative z_index_base overflow_hidden padding-vertical-small m-padding-vertical-med margin-center m-width-100">
        <div className="footer_col1">
          <ImgWrapper
            src="assets/img_footer_1.png"
            cssClassDiv="img_footer img_footer_left"
          />
        </div>
        <div className="footer_col2">
          <TitleH3
            cssClass="margin-center text_align_center margin_bottom_med m-footer_title h_footer margin_top_med m-margin-top-s"
            label="Be more Astrian!!!"
          />

          <Paragraph cssClass="text_align_center margin_bottom_2rem">
            Check us out on Twitter and Discord to catch the latest news and
            easter eggs!
          </Paragraph>

          <a
            target="_blank"
            href="https://twitter.com/SkiesOfAstra"
            rel="noreferrer"
          >
            <button className="button_default button_theme button_hover button_transition margin-center m_flex_row flex_align_center m-margin-bottom-large margin_bottom_med">
              <img
                className="social-icon-footer"
                src="assets/icon_twitter2.svg"
                alt="twitter"
              />{" "}
              Twitter
            </button>
          </a>
          <Paragraph cssClass="text_align_center p-footer">
            2022 Team SOA | All rights reserved
          </Paragraph>
        </div>

        <div className="footer_col1">
          <ImgWrapper
            src="assets/img_footer_2.png"
            cssClassDiv="img_footer img_footer_right"
          />
        </div>
      </div>
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockFooter;
