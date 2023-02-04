// YourComponent.stories.js|jsx

import DividerBlock from "./DividerBlock.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Assets/Divider",
  component: DividerBlock,
  decorators: [
    (Story) => (
      <div style={{ marginTop: "3em", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DividerBlock {...args} />;

export const Default = {
  args: {
    src: "assets/img_line_bottom.png",
    cssClass: "img_bottom_line",
    //👇 The args you need here will depend on your component
  },
};
