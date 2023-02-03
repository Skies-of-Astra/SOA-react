import ButtonNav from "../ButtonNav/ButtonNav";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

const Nav = (props) => {
  return (
    <>
      <a href="#NAV">
        <button className="button_default back-top button_hover button_transition display_none">
          ⇡ Back to top
        </button>
      </a>
      <div className="soa_nav_wrapper">
        <div className="soa_nav m_flex_row width-80">
          <ButtonNav url="#LUCID" label="The lucid state" />
          <ButtonNav url="#CLASSES" label="Character classes" />
          <ButtonNav url="#WORLD" label="The world" />
          <ButtonNav url="#PARTNER" label="Partners" />
          <ButtonNav url="#TEAM" label="The team" />
        </div>
        <ButtonWithIcon
          src="assets/icon_twitter2.svg"
          url="https://twitter.com/SkiesOfAstra"
          label="Join the community ➔"
        />
      </div>
    </>
  );
};

export default Nav;
