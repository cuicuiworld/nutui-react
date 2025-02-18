#  Tabbar

### introduce

Bottom Navigation Common Scenarios

### Install

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## code demo

### Basic usage

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return <Tabbar
    visible={0}
    activeVisible={activeIndex}
    onSwitch={(child, id) => {
      setActiveIndex(id)
    }}
  >
    <TabbarItem tabTitle="first" icon={<Home width={18} height={18} />} />
    <TabbarItem tabTitle="Classification" icon={<Category width={18} height={18} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={18} height={18} />} />
    <TabbarItem tabTitle="cart" icon={<Cart width={18} height={18} />} />
    <TabbarItem tabTitle="mine" icon={<My width={18} height={18} />} />
  </Tabbar>
}

export default App;
```
:::
### custom check

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar visible={2}>
    <TabbarItem tabTitle="first" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="cart" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="mine" icon={<My width={20} height={20} />} />
  </Tabbar>
);

export default App;
```
:::
### Logo Tips

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="first" icon={<Home width={12} height={12} />} num="11" />
    <TabbarItem tabTitle="Classification" icon={<Category width={12} height={12} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={12} height={12} />} />
    <TabbarItem tabTitle="cart" icon={<Cart width={12} height={12} />} num="110" />
    <TabbarItem tabTitle="mine" icon={<My width={12} height={12} />} />
  </Tabbar>
);

export default App;
```
:::

### Red dot

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="first" icon={<Home width={20} height={20} />} dot />
    <TabbarItem tabTitle="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="cart" icon={<Cart width={20} height={20} />} dot />
    <TabbarItem tabTitle="mine" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```
:::
### custom color

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="first" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="cart" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="mine" icon={<My width={20} height={20} />} />
  </Tabbar>
);

export default App;
```
:::
### Tabbar with customizable number of icons

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Category, Find, Home } from '@nutui/icons-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="first" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={20} height={20} />} />
  </Tabbar>
);

export default App;
```
:::
### Fixed bottom, free to jump

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="first" href="" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="cart" href="https://m.jd.com" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="mine" to="/" icon={<My width={20} height={20} />} />
  </Tabbar>
);

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| Prop            | Description                                                                          | Type   | Default |
|-----------------|--------------------------------------------------------------------------------------|--------|---------|
| visible | The default index value of the selected label                                        | number | `0`       |
| activeVisible`1.4.8` | The index value of the selected label                                                | number | -       |
| bottom          | Whether it is fixed at the bottom of the page                                        | boolean | `false`   |
| unactiveColor  | Icon inactive color                                                                  | string | `#7d7e80` |
| activeColor    | icon active color                                                                    | string | `#1989fa` |
size`v2.0.0废弃`    | icon size for all icons                                                              | string \| boolean | `20`      |
| safeAreaInsetBottom    | Whether to enable the full screen bottom safety zone adaptation of the iphone series | boolean | `false`   |
| style    | component style                                                                      | CSSProperties | `{}`      |
| className    | component class name                                                                 | string | -       |

### tabbar-item

| Prop | Description | Type   | Default |
|-----------|--------------|--------|--------|
| tabTitle | the title of the tab | string | -     |
| icon | Custom icon | ReactNode | -     |
| href | Jump link of tab page;   | string | -     |
| to`v1.4.0 Abandon`              | 	The route object of the tab, equal to React Router's [to Prop](https://v5.reactrouter.com/web/api/Link/to-string) Prop | any | -     |
| num | The numerical corner mark in the upper right corner of the tab, if it exceeds 99, it will be 99+     | number | -     |
| iconClassPrefix`v2.0.0废弃`   | Custom icon class name prefix, used to use custom icons | string | `nut-icon` |
| iconFontClassName`v2.0.0废弃` | Basic class name of custom icon font        | string | `nutui-iconfont` |
| dot | Whether to display the little red dot in the upper right corner of the icon   | boolean | `false`     |
| iconSize`v2.0.0废弃`    | icon size for some icon    | string \| boolean | `20` |


### Event

| Event               | Description               | callback parameter           |
|---------------------|--------------------|--------------------|
| onSwitch    | Trigger an event when switching tabs | Clicked data and index value |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-tabbar-height | `50px`|
| --nutui-tabbar-active-color | `$primary-color` |
| --nutui-tabbar-unactive-color | `$primary-color` |
| --nutui-tabbar-border-top | `1px solid #eee` |
| --nutui-tabbar-border-bottom | `1px solid #eee` |
| --nutui-tabbar-box-shadow | `none` |
| --nutui-tabbar-item-text-font-size | `$font-size-0` |
| --nutui-tabbar-item-text-line-height | `initial` |
| --nutui-tabbar-height | `50px` |
| --nutui-tabbar-word-margin-top | `auto` |
| --nutui-tabbar-dot-right | `12px`|
| --nutui-tabbar-dot-top | `0` |
| --nutui-tabbar-word-margin-top | `3px` |
