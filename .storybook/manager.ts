import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Recipe Tin UI',
    brandUrl: './',
    brandImage: './apple-touch-icon.png',
  }),
});