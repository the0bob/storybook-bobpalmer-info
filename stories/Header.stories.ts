import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../src/components/Header';

const defaultImg = 'https://avatars.githubusercontent.com/u/13439002?&v=4';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    brandName: 'My Brand',
    brandIcon: defaultImg,
  },
};

export const LoggedOut: Story = {};
