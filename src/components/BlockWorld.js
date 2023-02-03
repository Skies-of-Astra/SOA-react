import TitleH1 from "./TitleH1/TitleH1";
import Paragraph from "./Paragraph/Paragraph";
import DividerBlock from "./DividerBlock/DividerBlock";
import Button from "./Button/Button";

const BlockWorld = () => {
  return (
    <div id="WORLD" className="position_relative map_container">
      <div
        id="MAPINTRO"
        className="world_block padding-vertical-med animate_parallax margin-center border_radius_default border_stroke_blue"
      >
        <div className="content-width margin-center padding-large m-padding-med">
          <TitleH1
            cssClass="text_align_center margin_bottom_med"
            label="The World"
          />
          <div className="flex_row margin_bottom_med width-60 margin-center">
            <div className="m-clear-padding flex_child_even">
              <Paragraph cssClass="margin_bottom_2rem">
                <strong key="HBNBSKkjkj^&">The Astral Skies </strong>
                is a world where time no longer flows, at its frontier sits the
                timeless city of Astra, where visiting Nightflyers can learn
                about the Astral Skies and experience Astrian culture where you
                will not only encounter other visiting Nightflyers but also the
                crazy Astrian inhabitants living their unique lives, each with
                their own stories to tell.
              </Paragraph>
            </div>
          </div>
          <Button
            cssClass="button_transition button_default button_theme margin-center display_block font_size_small button_hover"
            label="Explore the map >"
          />
        </div>
      </div>
      <DividerBlock
        src="assets/img_line_bottom.png"
        cssClass="img_bottom_line"
      />
    </div>
  );
};

export default BlockWorld;
