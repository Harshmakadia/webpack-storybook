# Button

<!-- STORY -->

##### Button is a default component to display action in a page.

### Import

```js
import Button from 'ui-kit';
```
### Examples

#### Skin and Priority
###### Button supports 8 skin styles:

- `short` is for short button and for general action.
```js
    <Button type='short' variant='contained' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `long` is for fullwidth button and for general action.
```js
    <Button type='long' variant='contained' fullWidth={true} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `alert` - damaging actions like delete.
```js
    <Button type='alert' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `outlined`-is for general action.
```js
    <Button type='outlined' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `link` - If you want the circle image(true/false).
```js
    <Button type='link' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `delete`-damaging actions like delete.
```js
    <Button type='delete' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `line` - general action with lined border.
```js
    <Button type='line' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```
- `icon` - general action with icon button.
```js
    <Button type='icon' variant='outlined' fullWidth={false} disabled={false} disableRipple={true} handleClick={'Click'} handleInputFocus={'OnFocus'} handleInputBlur={'OnBlur'} btnText='Button'>
```


<!-- STORY_SOURCE -->
<!-- SOURCE -->
#### Variant
`contained` - Styles applied to the root element if variant="contained".

`outlined` - Styles applied to the root element if variant="outlined".

#### Size

Button supports two sizes – large for emphasized actions, short layouts.

#### States

Button can be disabled when needed to indicate that action is available, but cannot be performed at the moment.

#### Custom HTML Tag

This component can be rendered as any given HTML tag – <Link/> (from react router).
All props/attributes will pass to the rendered HTML tag.

For example:
- as a <Link/> from react router, the component can have props like to, replace, etc.
