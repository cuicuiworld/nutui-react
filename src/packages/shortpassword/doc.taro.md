#  ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等

### 安装
```ts
import { ShortPassword } from '@nutui/nutui-react-taro';
```


## 代码演示

### 基础用法
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="基础用法"
        
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => close()}
        onChange={(value) => setValue(value)}
       />
     </>
  )
}
export default App;

```
:::


### 显示按钮组
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react-taro';
import { HeartFill1 } from '@nutui/icons-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="显示按钮组"
        
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
          visible={visible}
          modelValue={value}
          tipsIcon={<HeartFill1 />}
          iconSize={16}
          onClose={() => close()}
          noButton={false}
          onChange={(value) => setValue(value)}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        />
      </>
  )
}
export default App;

```
:::

### 自定义密码长度4
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="自定义密码长度4"
        
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        length={4}
       />
     </>
  )
}
export default App;

```
:::
### 忘记密码提示语事件回调
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
   const onTips = () => {
    Toast.text('执行忘记密码提示语')
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="忘记密码提示语事件回调"
        
        onClick={() => {
          setVisible(true)
        }}
       />
       <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        onTips={() => onTips()}
       />
     </>
  )
}
export default App;

```
:::



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue         | 内容               | string \| number | -                |
| visible        | 是否展示短密码框                         | boolean | `false`              |
| title                  | 标题                | string         | `请输入密码`                   |
| description                   | 密码框描述          | string         | `您使用了虚拟资产，请进行验证` |
| tips                   | 提示语              | string         | `忘记密码`                     |
| closeOnClickOverlay | 是否点击遮罩关闭    | boolean        | `true`                         |
| noButton              | 是否隐藏底部按钮    | boolean        | `true`                         |
| length                 | 密码长度，取值为4~6 | string \| number | `6`                            |
| errorMsg              | 错误信息提示        | string         | -                           |
| autoFocus              | 自动聚焦        | boolean         | `false`                           |
| tipsIcon `v2.0.0` | 忘记密码提示icon | `ReactNode`  | - |
| iconSize `v2.0.0` | 图标大小 | string \| number  | `11` |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onChange   | 输入密码时触发事件     |  当前输入框值value    |
| onOk       | 点击确认时触发事件     | 当前输入框值value    |
| onCancel   | 点击取消时触发事件     | -    |
| onClose    | 点击关闭图标和遮罩时触发事件 | -    |
| onTips    | 点击忘记密码时触发事件 | -    |
| onComplete | 输入完成的回调         | 当前输入框值value    |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-shortpassword-background-color | `rgba(245, 245, 245, 1)` |
| --nutui-shortpassword-border-color | `#ddd` |
| --nutui-shortpassword-error | `$primary-color` |
| --nutui-shortpassword-forget | `rgba(128, 128, 128, 1)` |
