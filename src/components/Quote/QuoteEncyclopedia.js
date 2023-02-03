import React from "react";

const QuoteEncyclopedia = (props) => {
  return (
    <figure className="quote">
      <blockquote>{props.children}</blockquote>
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};

export default QuoteEncyclopedia;
