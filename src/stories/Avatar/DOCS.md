# Avatar

```js
import { Avatar } from 'ui-kit';
```

<!-- STORY -->

### Flags usage rules

Use **circle** flag when you want to circle the avatar image:

**true** - when you want avatar image in `circle` shape

```js
<Avatar img='user-image.png' className="test-btn" height={55} width={55} circle={true} altText="User Image" />
```

**false** - when you want avatar image in `default` shape

```js
<Avatar img='user-image.png' className="test-btn" height={75} width={75} circle={false} altText="User Image" />
```