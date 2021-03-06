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

import Button from '../src/components/Button/button.stories';
import ButtonReadme from '../src/components/Button/README.md';

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

  storiesOf('Button',module)
  .addDecorator(withKnobs)
  // .addDecorator(withDocs(ButtonDocs))
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
  .add('short',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Short)}
                    disableRipple={boolean('disableRipple',false)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))
  .add('long',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Long)}
                    disableRipple={boolean('disableRipple',true)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))

  .add('alert',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Alert)}
                    disableRipple={boolean('disableRipple',true)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))

  .add('outlined',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Outlined)}
                    disableRipple={boolean('disableRipple',true)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))

  .add('link',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Link)}
                    disableRipple={boolean('disableRipple',true)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))

  .add('line',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button')}
                    type={select('type',options, options.Line)}
                    disableRipple={boolean('disableRipple',false)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))

  .add('icon',() => (
            <Button
                    disabled={boolean('disabled',false)}
                    variant={select('variant',variantOptions)}
                    btnText={text('Text','Button 😄')}
                    type={select('type',options, options.Icon)}
                    disableRipple={boolean('disableRipple',false)}
                    fullWidth={boolean('fullWidth',false)}
                    handleInputFocus={action('On Focus')}
                    handleInputBlur={action('On Blur')}
                    handleClick={action('Button Clicked')}
                    >
            </Button>
  ))


  
  

