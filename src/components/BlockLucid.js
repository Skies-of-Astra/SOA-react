import CompLucidBackground from "./CompLucidBackground";
import AnimationLucid from "./AnimationLucid/AnimationLucid";
import Paragraph from "./Paragraph/Paragraph";
import TitleH1 from "./TitleH1/TitleH1";
import TitleH3 from "./TitleH3/TitleH3";
import DividerBlock from "./DividerBlock/DividerBlock";
import ImgWrapper from "./ImageWrapper/ImgWrapper";

const BlockLucid = (props) => {
  return (
    <div className="margin-center default_bg z_index_base position_relative padding-top-med">
      <div className="overflow_hidden position_relative z_index_base width-100">
        <div id="LUCID"></div>
        <CompLucidBackground />
        <div className="content-width margin-center m_p_large">
          <div className="margin_bottom_large margin-center width-60 m-width-80">
            <div className="flex_child_even animate_parallax anim_delay-1">
              <TitleH1 cssClass="" label="The lucid state" />
              <Paragraph cssClass="margin_bottom_2rem">
                We are the nightflyers, the thrill-seekers.
              </Paragraph>
              <Paragraph cssClass="margin_bottom_2rem" content="">
                In search of the bridge which will lead us to the Astral Skies
                and create a new kind of culture where our community directs
                truly immersive storytelling. We will go everywhere, grow
                together, learn together, and let our minds free to travel to
                the forgotten past and the far future, bridging the gap between
                the real and astral world.
              </Paragraph>
              <Paragraph cssClass="">We Own The Night.</Paragraph>
              <Paragraph cssClass="margin_bottom_med">
                We Own The Sky.
              </Paragraph>
            </div>

            <div className="flex_row margin-center flex-even position_relative">
              <ImgWrapper
                tagID=""
                cssClassDiv="lost_animation"
                cssClassImg="width-100"
                src="assets/img_lucid_lost.png"
              />

              <div>
                <TitleH3
                  cssClass="margin_bottom_2rem"
                  label="The 3 rules of Astra"
                />
                <Paragraph cssClass="">
                  1. Tell truly immersive Web3 stories.
                </Paragraph>
                <Paragraph cssClass="">2. Empower the community.</Paragraph>
                <Paragraph cssClass="margin_bottom_large">
                  3. Never stop Innovating.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <AnimationLucid />
      </div>
      <DividerBlock
        src="assets/img_line_bottom.png"
        cssClass="img_bottom_line"
      />
    </div>
  );
};

export default BlockLucid;
