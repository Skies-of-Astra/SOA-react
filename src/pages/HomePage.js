import { useState } from "react";

import Nav from "../components/Nav/Nav";
import BlockIntro from "../components/BlockIntro";
import BlockParallax from "../components/BlockParallax";
import BlockLucid from "../components/BlockLucid";
import BlockCharacters from "../components/BlockCharacters";
import LightBoxChars from "../components/LightBoxChars";
import BlockWorld from "../components/BlockWorld";
import BlockPartners from "../components/BlockPartners";
import BlockTeam from "../components/BlockTeam";
import BlockFooter from "../components/BlockFooter";
import ImgWrapper from "../components/ImageWrapper/ImgWrapper";

// import ButtonBackTop from "../components/ButtonBackTop";

const Homepage = () => {
  const [showCharBox, setShowCharBox] = useState(false);
  const [charNum, setCharNum] = useState(0);

  const HideCharBox = () => {
    setShowCharBox(false);
  };

  const ViewCharBox = (num) => {
    setCharNum(num);
    setShowCharBox(true);
  };

  return (
    <div>
      {/* {showBackButton ? <ButtonBackTop /> : ""} */}
      {showCharBox ? (
        <LightBoxChars callBack={HideCharBox} charNum={charNum} />
      ) : (
        ""
      )}
      <div className="soa_block padding-bottom-large position_relative">
        <Nav />
        <ImgWrapper
          tagID=""
          cssClassDiv="soa_logo"
          cssClassImg=""
          src="assets/soa_logo_3.png"
        />
        <BlockIntro />
      </div>
      <BlockParallax />
      <BlockLucid />
      <BlockCharacters callBack={ViewCharBox} />
      <BlockWorld />
      <BlockPartners />
      <BlockTeam />
      <BlockFooter />
    </div>
  );
};

export default Homepage;
