// YourComponent.stories.js|jsx

import QuoteEncyclopedia from "./QuoteEncyclopedia.js";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Patterns/Encyclopedia quote",
  component: QuoteEncyclopedia,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", width: "40%" }}>
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <QuoteEncyclopedia {...args} />;

export const Default = {
  args: {
    children:
      "‘...Some fragments of their previous self remain, but without intervention, they remain under the curse…’",
    caption: "Astral Encyclopedia",
    //👇 The args you need here will depend on your component
  },
};
