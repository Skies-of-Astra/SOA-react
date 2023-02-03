// YourComponent.stories.js|jsx

import TitleH2 from "./TitleH2.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography/Title H2",
  component: TitleH2,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TitleH2 {...args} />;

export const Left = {
  args: {
    cssClass: "",
    label: "Skies of Astra",
    //👇 The args you need here will depend on your component
  },
};

export const Center = {
  args: {
    cssClass: "text_align_center",
    label: "Skies of Astra",
    //👇 The args you need here will depend on your component
  },
};

export const AnimatedGlow = {
  args: {
    cssClass: "text_align_center glow-effect",
    label: "Skies of Astra",
    //👇 The args you need here will depend on your component
  },
};
