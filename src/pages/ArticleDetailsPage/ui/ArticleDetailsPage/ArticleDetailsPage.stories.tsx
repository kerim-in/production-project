import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export default {
    title: 'shared/ArticlesPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
