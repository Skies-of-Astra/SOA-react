// YourComponent.stories.js|jsx

import ActionClick from "./ActionClick.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button/Action Click",
  component: ActionClick,
};

const TestFunction = () => {
  console.log("Action fired");
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ActionClick {...args} />;

export const Default = {
  args: {
    callBack: TestFunction,
    callBackArgs: "none",
    cssClass: "soa_image_carousel animate_parallax carousel_chars",
    children: "Click me",
    //👇 The args you need here will depend on your component
  },
};
