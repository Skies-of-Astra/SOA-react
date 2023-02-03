// import React from 'react';
import ImgWrapper from "./ImageWrapper/ImgWrapper";
import TitleH2 from "./TitleH2/TitleH2";
import Paragraph from "./Paragraph/Paragraph";
import QuoteEncyclopedia from "./Quote/QuoteEncyclopedia";
import ButtonClose from "./ButtonClose";

const LightBoxComp = (props) => {
  return (
    <div className="flex_row padding-large background-color-dark soa_lighbox_block lightbox_chars">
      <ImgWrapper
        tagID=""
        cssClassDiv="flex_col flex_child_even"
        cssClassImg="width-100"
        src={props.src}
      />
      <div className="padding-left-large flex_child_even">
        <TitleH2 cssClass="margin_bottom_2rem" label={props.title} />
        <Paragraph cssClass="margin_bottom_2rem">
          <strong>{props.content1}</strong>
        </Paragraph>
        <Paragraph cssClass="margin_bottom_2rem">{props.content2}</Paragraph>
        <QuoteEncyclopedia caption="Astral Skies Encyclopedia">
          {props.encyclopedia}
        </QuoteEncyclopedia>
      </div>
      <ButtonClose callBack={props.callBack} />
    </div>
  );
};

export default LightBoxComp;
