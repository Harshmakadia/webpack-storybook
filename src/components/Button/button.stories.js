import React from 'react';
import  Button  from './button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Button' };

export const withText = () => <Button
      onClick={action('clicked')}
      isDisabled={boolean('isDisabled', false)}
      label={text('text', 'Hello Im Button')}
    />;