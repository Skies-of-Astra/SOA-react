import TitleH2 from "./TitleH2/TitleH2";
import Paragraph from "./Paragraph/Paragraph";

const BlockIntro = (props) => {
  return (
    <div className="content-width margin-center margin_bottom_large m_p_large">
      <TitleH2
        tagID="GLOW"
        cssClass="text_align_center glow-effect"
        label="Welcome to Skies of Astra"
      />
      <Paragraph cssClass="text_align_center margin-center margin_bottom_2rem max-width-870px">
        <b>Skies of Astra</b> is a new wave Web3 Entertainment Brand, that
        through the use of animated content & immersive VR, will tell powerful
        stories with interactive worldbuilding to deliver a unique form of Web3
        storytelling.
      </Paragraph>
    </div>
  );
};

export default BlockIntro;
