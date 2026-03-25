import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: '',
    brandUrl: './',
    brandImage: './favicon-96x96.png',
  }),
});