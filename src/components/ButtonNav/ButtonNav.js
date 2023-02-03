// import React from 'react';

const ButtonNav = (props) => {
  return (
    <div>
      <li>
        <a href={props.url}>{props.label}</a>
      </li>
    </div>
  );
};

export default ButtonNav;
