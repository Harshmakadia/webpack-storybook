import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '@storybook/addon-notes/register';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean, number,select } from '@storybook/addon-knobs';
import {Welcome } from '@storybook/react/demo';
import withStyles from "@sambego/storybook-styles";
import { setOptions } from '@storybook/addon-options';
setOptions({ addonPanelInRight: true });

import AvatarStory from '../stories/Avatar/index';
import AvatarReadme from '../stories/Avatar/README.md';
import AvatarDocs from '../stories/Avatar/DOCS.md';

import Button from '../stories/Button/index';
import ButtonReadme from '../stories/Button/README.md';
import ButtonDocs from '../stories/Button/DOCS.md';

const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);
const options = {
  Short:'short',
  Long:'long',
  Alert:'alert',
  Outlined:'outlined',
  Link:'link',
  Delete:'delete',
  Line:'line',
  Icon:'Icon'
}
const variantOptions = {
  outlined:'outlined',
  contained:'contained'
 
}
// addDecorator(CenterDecorator);
storiesOf('Welcome', module)
  .add('to UI-Kit', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(AvatarDocs))
  .addParameters({
    styles:{
      border:'1px solid black'
    },
    options: {
      showPanel: true,
      panelPosition: 'right',
    },
    readme: {
      codeTheme: 'github',
      sidebar: AvatarReadme,
    },
  })
    // .addDecorator(withReadme(AvatarReadme))
  .add('Avatar Usage',() => (
    <AvatarStory
      img={text('img', 'https://greatindiantours.com/wp-content/themes/travel-log/images/dummy-user.jpg')}
      height={number('height', 60)}
      width={number('width', 60)}
      circle={boolean('circle', false)}
      altText={text('altText', 'User Icon')}
    />
  ));
  storiesOf('Button',module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addParameters({
    styles:{
      border:'1px solid black'
    },
    options: {
      showPanel: true,
      panelPosition: 'right',
    },
    readme: {
      codeTheme: 'github',
      sidebar: ButtonReadme,
    },
  })
  .add('Button Usage',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options)}
                    disableRipple={boolean('disableRipple',true)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))
  

