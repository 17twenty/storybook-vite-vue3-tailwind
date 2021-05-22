import HelloWorld from '../components/HelloWorld.vue';

export default {
  title: 'Example/Tailwind',
  component: [HelloWorld],
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HelloWorld/>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Tailwind',
};

