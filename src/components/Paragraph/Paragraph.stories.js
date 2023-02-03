// YourComponent.stories.js|jsx

import Paragraph from "./Paragraph.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography/Paragraph",
  component: Paragraph,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "2rem",
          display: "flex",
          margin: "auto",
          maxWidth: "700px",
          position: "relative",
          marginBottom: "4rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Paragraph {...args} />;

export const LeftAlign = {
  args: {
    cssClass: "",
    children:
      "Skies of Astra is a new wave Web3 Entertainment Brand, that through the use of animated content & immersive VR, will tell powerful stories with interactive worldbuilding to deliver a unique form of Web3 storytelling.",
    //👇 The args you need here will depend on your component
  },
};

export const Centered = {
  args: {
    cssClass: "text_align_center",
    children:
      "Skies of Astra is a new wave Web3 Entertainment Brand, that through the use of animated content & immersive VR, will tell powerful stories with interactive worldbuilding to deliver a unique form of Web3 storytelling.",
    //👇 The args you need here will depend on your component
  },
};
