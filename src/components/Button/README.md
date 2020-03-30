# Button

### Usage

```js
import { Button } from 'ui-kit';
```

### Code

```js
    <Button type='short' 
        variant='contained' 
        fullWidth={false} 
        disabled={false} 
        disableRipple={true} 
        handleClick={'Click'} 
        handleInputFocus={'OnFocus'} 
        handleInputBlur={'OnBlur'} 
    btnText='Button'>
```
<!--SOURCE-->
<!-- STORY_SOURCE -->
### Properties

- **type** - Attributes applied to the button element if the component is used to render different types of button. Different types includes
    - **short** is for short button and for general action.
    - **long** is for fullwidth button and for general action.
    - **alert** is for damaging actions like delete.
    - **outlined** is for general action.
    - **link** If you want the circle image(true/false).
    - **delete** damaging actions like delete.
    - **line** general action with lined border.
    - **icon** general action with icon button.

- **variant** - The variant attribute for button element.
    - **contained** - Styles applied to the root element if variant="contained".
    - **outlined** - Styles applied to the root element if variant="outlined".

- **fullwidth** - If true, the button will take up the full width of its container.

- **disableRipple** - If true, the ripple effect will be disabled.
⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName.

- **disabled** - If true, the button will be disabled.

- **btnText** - Used to provide label to button element.

| propName | propType | defaultValue                                     | isRequired |
| -------- | -------- | ------------                                     | ---------- |
| type     | string   | short                                            | +          |
| variant  | string   | outlined                                         | +          |
| fullwidth| boolean  | false                                            | -          |
| disableRipple| boolean |    -                                          | -          |
| disabled | boolean  |false                                             | -          |
| btnText  | string   |'Button'                                          | -          |