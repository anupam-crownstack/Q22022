// import CenterLayout from "../CenterLayout";
import Button from "./Button";

export default {
  title: "Components/Form/Button",
  component: Button,
  // args in the component-level
  args: {
    label: "Button",
  },
  /* Component level decorator */
  //   decorators: [(story) => <CenterLayout>{story()}</CenterLayout>],
  argTypes: {
    onClick: { action: "onClick" },
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = () => (
  <Button label="Primary Button" variant="primary" />
);

PrimaryButton.storyName = "Primary Variant";

/*
 * Args system is more appropriate:
 * 1. Since stories represent different state of a component, state can be represented by the args object
 * 2. Reduces the unique code
 * 3. Re-use args from another story
 */

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  // Overrides the component level args
  label: "Secondary Button",
  variant: "secondary",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  variant: "danger",
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  ...DangerButton.args,
  variant: "success",
};
