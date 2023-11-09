import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { PageContact } from '../src/pages/PageContact';

const meta = {
  title: 'Pages/Contact',
  component: PageContact,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
