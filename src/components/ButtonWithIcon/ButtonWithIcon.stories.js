// YourComponent.stories.js|jsx

import ButtonWithIcon from "./ButtonWithIcon.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button/Icon",
  component: ButtonWithIcon,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ButtonWithIcon {...args} />;

export const Default = {
  args: {
    src: "assets/icon_twitter2.svg",
    label: "Join the community",
    //👇 The args you need here will depend on your component
  },
};
