import React from "react";

const ButtonClose = (props) => {
  return (
    <button className="close_button animate_parallax" onClick={props.callBack}>
      ✖
    </button>
  );
};

export default ButtonClose;
