/**
 *
 * @param {{ src:string, url: string, label: string}} props
 */

const ButtonWithIcon = (props) => {
  return (
    <a target="_blank" rel="noreferrer" href={props.url} alt="link">
      <div className="social_container flex_row button_hover">
        <p className="p_social margin-right-small">{props.label}</p>
        <img className="social_icons" src={props.src} alt="icon" />
      </div>
    </a>
  );
};

export default ButtonWithIcon;
