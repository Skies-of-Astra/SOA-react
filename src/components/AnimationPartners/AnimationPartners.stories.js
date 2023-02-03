// YourComponent.stories.js|jsx
import AnimationPartners from "./AnimationPartners.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Motion/Partners",
  component: AnimationPartners,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <AnimationPartners {...args} />;

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
