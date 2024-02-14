import type { Meta, StoryObj } from '@storybook/react';
import { TsUserProfile } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsUserProfile',
    component: TsUserProfile,
    tags: ['autodocs'],
} satisfies Meta<typeof TsUserProfile>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'Andrea Carmona',
        age: 30,
        hobbies: ['Leer', 'Tejer', 'Programar']
    },
};