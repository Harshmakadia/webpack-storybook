import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '@storybook/addon-notes/register';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import {Welcome } from '@storybook/react/demo';

import { setOptions } from '@storybook/addon-options';
setOptions({ addonPanelInRight: true });

import AvatarStory from '../stories/Avatar/index';
import AvatarReadme from '../stories/Avatar/README.md';
import AvatarDocs from '../stories/Avatar/DOCS.md';

const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);
// addDecorator(CenterDecorator);

storiesOf('Welcome', module)
  .add('to UI-Kit', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
    .addDecorator(withDocs(AvatarDocs))
    // .addDecorator(withReadme(AvatarReadme))
  .add('Avatar Usage',() => (
    <AvatarStory
      img={text('img', 'https://greatindiantours.com/wp-content/themes/travel-log/images/dummy-user.jpg')}
      height={number('height', 60)}
      width={number('width', 60)}
      circle={boolean('circle', false)}
      altText={text('altText', 'User Icon')}
    />
  ))



