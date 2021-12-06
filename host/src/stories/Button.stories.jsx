import React from "react";

// TODO: Just publish this as a package install and reference here
import { HelloWorld } from "../../../recommendations-api/build/index.es.js";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Recommendations",
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Recommendations",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Recommendations",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Recommendations",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Recommendations",
};
