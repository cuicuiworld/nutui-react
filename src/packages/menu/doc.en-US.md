# Menu

### Intro

The menu list that pops down downwards.

### Install

``` javascript
// react
import { Menu, MenuItem } from '@nutui/nutui-react';
```

### Basic Usage

:::demo

```tsx
import React, {useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <h2>Basic Usage</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Custom Menu Content

Popup can be closed with toggle method in menu instance.

:::demo

```tsx
import React, { useRef, useState } from 'react'
import { Menu, MenuItem, Button } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const itemRef = useRef(null)
  
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title="筛选" ref={itemRef}>
            <div>Custom content</div>
            <Button onClick={() => itemRef.current.toggle(false)}>Confirm</Button>
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Two Cols In One Line

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'Product1', value: 1 },
    { text: 'Product2', value: 2 },
    { text: 'Product3', value: 3 },
    { text: 'Product4', value: 4 },
    { text: 'Product5', value: 5 },
    { text: 'Product6', value: 6 },
    { text: 'Product7', value: 7 },
    { text: 'Product8', value: 8 },
    { text: 'Product9', value: 9 },
    { text: 'Product10', value: 10 },
    { text: 'Product11', value: 11 },
    { text: 'Product12', value: 12 },
    { text: 'Product13', value: 13 },
    { text: 'Product14', value: 14 },
    { text: 'Product15', value: 15 },
    { text: 'Product16', value: 16 },
    { text: 'Product17', value: 17 }
  ])
  
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} columns={2} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Custom Active Color

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <Menu activeColor="green">
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Custom Icons

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';
import { TriangleDown, Success } from '@nutui/icons-react'

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <Menu titleIcon={<TriangleDown />>
          <MenuItem options={options} value={0} optionsIcon={<Success />} />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Expand Directions

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Disable Menu

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## API

### Menu Props

| 参数                  | 说明                           | 类型                    | 默认值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | Active color of title and option           | string                  | `#F2270C` |
| closeOnClickOverlay | Whether to close when overlay is clicked     | boolean                 | `true`    |
| lockScroll          | Whether the background is locked                   | boolean                 | `true`    |
| scrollFixed         | Whether to fixed when window is scrolled, fixed position can be set                   | boolean \| string \| number                 | `true`    |
| titleIcon`v2.0.0`          | Custome title icon                 | React.ReactNode                  | -       |

### MenuItem Props

| 参数                          | 说明                                    | 类型    | 默认值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | Item title                              | string  | Current selected value   |
| options                       | Options                                | Array   | -                |
| disabled                      | Whether to disable dropdown item                            | boolean | `false`            |
| columns                          | Display how many options in one line          | number  | `1`                |
| optionsIcon`v2.0.0`          | Custome option icon                          | React.ReactNode  | `Check`          |
| direction            | Expand direction, can be set to up                | string  | `down`           |
| activeClassName    | Active custome title class              | string  | -                |
| inactiveClassName  | Inactive custome title class            | string  | -                |


### MenuItem Events

| Event      | Description                 | Arguments     |
|----------|----------------------|--------------|
| onChange | Emitted select option changed | Selected value |

### MenuItem API

| Event | Description                 | Arguments     |
|-----|----------------------|--------------|
| toggle   | Toggle menu display status, true to show，false to hide, no param is negated | `show?: boolean` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-menu-bar-line-height | `48px` |
| --nutui-menu-item-font-size | `$font-size-2` |
| --nutui-menu-item-text-color | `$title-color` |
| --nutui-menu-item-active-text-color | `$primary-color` |
| --nutui-menu-bar-border-bottom-color | `#eaf0fb` |
| --nutui-menu-bar-opened-z-index | `2001` |
| --nutui-menu-item-disabled-color | `#969799` |
| --nutui-menu-title-text-padding-left | `8px` |
| --nutui-menu-title-text-padding-right | `8px` |
| --nutui-menu-item-content-padding | `12px 24px` |
| --nutui-menu-item-content-max-height | `214px` |
| --nutui-menu-item-option-padding-top | `12px` |
| --nutui-menu-item-option-padding-bottom | `12px` |
| --nutui-menu-item-option-i-margin-right | `6px` |
| --nutui-menu-bar-box-shadow | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| --nutui-menu-scroll-fixed-top | `0` |
| --nutui-menu-scroll-fixed-z-index | `$mask-z-index` |
| --nutui-menu-active-item-font-weight | `500` |
| --nutui-menu-item-content-bg-color | `$gray6` |
