// YourComponent.stories.js|jsx

import CardCircle from "./CardCircle.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Patterns/Card - circle",
  component: CardCircle,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CardCircle {...args} />;

export const Default = {
  args: {
    cssClass:
      "flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small",
    title: "Milo",
    subTitle: "Creative Director",
    src: "assets/img_team_01.jpg",
    //👇 The args you need here will depend on your component
  },
};
