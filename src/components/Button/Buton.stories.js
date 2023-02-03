// YourComponent.stories.js|jsx
import Button from "./Button";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "8rem",
          display: "flex",
          margin: "auto",
          width: "700px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Default = {
  args: {
    cssClass:
      "button_default button_theme margin-center display_block font_size_small button_hover",
    label: "Explore the map >",
  },
};

export const BackToTop = {
  args: {
    cssClass: "button_default back-top button_hover button_transition",
    label: "⇡ Back to top",
  },
};

export const ClosePopUp = {
  args: {
    cssClass: "close_button animate_parallax",
    label: "✖",
  },
};
