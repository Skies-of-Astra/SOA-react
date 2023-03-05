import { useState } from "react";

const ColorTile = (props) => {
  const [showTip, setShowTip] = useState(false);
  const copyToClip = () => {
    setShowTip(true);
    navigator.clipboard.writeText(props.color);
    console.log("Colour copied");
    setTimeout(() => {
      setShowTip(false);
    }, 1000);
  };
  return (
    <div className="grid_card">
      <div
        onClick={copyToClip}
        className="color_tile item-a"
        style={{ background: `${props.color}` }}
      >
        {showTip ? (
          <div className="tileTip">
            <b>Copied!</b> {props.color}
          </div>
        ) : null}
      </div>
      <p className="item-b text_align_center">{props.children}</p>
      <div className="item-c">{props.tokenId}</div>

      <p className="item-a">{props.color}</p>
    </div>
  );
};

export default ColorTile;
