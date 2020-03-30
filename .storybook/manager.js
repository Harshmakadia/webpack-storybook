import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import 'storybook-readme/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-options/register';
import '@storybook/addon-info';

const theme = create({
	base: 'light',

	// Typography
	fontBase: 'sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Wotnot UI-Kit',
	brandUrl: 'https://wotnot.io/',
	brandImage: 'https://wotnot.io/wp-content/uploads/2019/04/wotnot-logo.svg',
});

addons.setConfig({
	theme: theme,
});