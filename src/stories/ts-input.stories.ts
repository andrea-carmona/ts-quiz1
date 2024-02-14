import type { Meta, StoryObj } from '@storybook/react';
import { TsInput } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsInput',
    component: TsInput

} satisfies Meta<typeof TsInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      value: 'Hello',
    }
}

export const Secondary: Story = {
  args: {
    value: 'Andrea'
  },
};

export const Object: Story = {
  args: {
    value: 30
  },
};