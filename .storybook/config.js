import { configure,addParameters,addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);


function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);