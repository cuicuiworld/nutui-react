# BackTop 返回顶部

## 介绍

提供较长的页面快捷返回顶部功能。

## 安装

```javascript
// react
import { BackTop } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo"  id="target">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop  />
    </div>
    </>
  );
};
export default App;
```
:::



### 设置出现位置

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
    const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo"  id="target">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop  threshold={200} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::
### 自定义样式

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';
import { Top } from '@nutui/icons-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo"  id="target">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop
          className="custom-class"
          threshold={100}
          bottom={110}
        >
          <div
            className="backtop-demo"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Top width={12} height={12} className="nut-backtop-main" />
            <div style={{ fontSize: '12px' }}>顶部</div>
          </div>
        </BackTop>
    </div>
    </>
  );
};
export default App;
```
:::

### 父级元素内滚动

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
    const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo" style={{ height: '800px', overflowY: 'auto' }} id="target">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop target="target" threshold={100} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::

### click 事件

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  return (
    <>
    <div className="demo" style={{ height: '1000px', overflowY: 'auto' }} id="target">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop threshold={100} bottom={50} onClick={handleClick} />
    </div>
    </>
  );
};
export default App;
```
:::

## BackTop

### Props

| 字段        | 说明                            | 类型    | 默认值 |
| ----------- | ------------------------------- | ------- | ------ |
| target        | 获取监听的目标元素         | string  | -      |
| threshold    | 页面垂直滚动多高后出现          | number | `200`  |
| zIndex      | 设置组件页面层级                | number | `10`   |
| duration    | 设置动画持续时间，为 0 时表示无动画                | number | `1000` |
| onClick          | 按钮点击时触发事件 | (event: MouseEvent) => void | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-backtop-border-color | 边框颜色 | `#e0e0e0` |
