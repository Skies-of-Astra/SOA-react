// YourComponent.stories.js|jsx

import Nav from "./Nav.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Patterns/Navigation",
  component: Nav,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Nav {...args} />;

export const DefaultView = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
