// YourComponent.stories.js|jsx

import ButtonNav from "./ButtonNav.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button/Nav",
  component: ButtonNav,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ButtonNav {...args} />;

export const Default = {
  args: {
    cssClass: "",
    label: "Home",
    //👇 The args you need here will depend on your component
  },
};
