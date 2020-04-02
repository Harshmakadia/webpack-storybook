import { configure,addParameters,addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);


function loadStories() {
  require('./');
}

configure(loadStories, module);