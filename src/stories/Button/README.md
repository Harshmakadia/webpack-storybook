# Button

### Usage

```js
import { Button } from 'ui-kit';
```
<!--SOURCE-->
<!-- STORY_SOURCE -->
### Properties

- `type` - Attributes applied to the button element if the component is used to render different types of button.
- `variant` - The variant attribute for button element.
- `fullwidth` - If true, the button will take up the full width of its container.
- `disableRipple` - If true, the ripple effect will be disabled.
⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName.
- `disabled` - If true, the button will be disabled.
- `btnText` - Used to provide label to button element.

| propName | propType | defaultValue                                     | isRequired |
| -------- | -------- | ------------                                     | ---------- |
| type     | string   | short                                            | +          |
| variant  | string   | outlined                                         | +          |
| fullwidth| boolean  | false                                            | -          |
| disableRipple| boolean |    -                                          | -          |
| disabled | boolean  |false                                             | -          |
| btnText  | string   |'Button'                                          | -          |


### Roadmap






