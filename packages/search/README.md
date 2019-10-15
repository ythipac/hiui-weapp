---
category: Components          
cols: 1                                  
type: 交互             
title: wxSearch            
subtitle: 搜索框   
app: wx                 
author: meiqin                    
---

## 使用效果

<img src="http://img.hicdn.cn/fed/images/20190109/de7e71cac0fbf8adf27666205bd69e7d.png" width="375" />
```jsx
```

微信开发者工具---》工具---构建npm


## 使用说明-推荐

```
 index.wxml文件

 <view class="mt-32">
     <search
       placeholder="商品名称、收货姓名、收货手机号、订单编号"
       bind:onsearch="onSearchBtn" >
     </search>

     <search
       placeholder="商品名称、收货姓名、收货手机号、订单编号"
       bind:onsearch="onSearchBtn"
       rightText="取消" >
     </search>

     <search
         placeholder="商品名称、收货姓名、收货手机号、订单编号"
         bind:onsearch="onSearchBtn"
         rightText="" >
       </search>
 </view>



index.js文件

Page({
    onSearchBtn(value, e) {
        console.log('onSearchBtn===', value, e);
    }
})


index.json文件

{
        "navigationBarTitleText": "search demo页面",
        "usingComponents": {
            "search": "@yt/wx-search"
    }
}

```


## api说明

| 属性名                  | 类型        | 默认值      | 是否必须        | 说明                                              |
|------------------------|-------------|------------|----------------|---------------------------------------------------|
| placeholder            | String      | ''         | 否             | placeholder文案                                |
| placeholderStyle       | String      | ''         | 否             | placeholder样式   |
| rightText              | String      | '搜索'     | 否              | 右侧点击文案，默认搜索                                |          |
| searchValue            | String      | ''         | 否              | 默认值                                           |
| searchFocus             |Boolean     |  false     | 否               |自动聚焦   |
| searchDisabled         | Boolean     |  false     | 否               |是否可填  |
| confirmType            | String      | 'done'     | 否              | 设置键盘右下角按钮的文字，仅在type='text'时生效,confirm-type的有效值有：send，search，next，go，done |
| wrapClass              | String      |            | 否              |传入外部的样式 |
| inputClass             | String      |            | 否              |传入外部的input样式|
| textClass              | String      |            | 否              |传入外部的搜索字样式|
| bind:onsearchconfirm      | Function    | ''         | 否              | 点击键盘完成按钮时触发 |
| bind:onsearchinput        | Function    | ''         | 否              | 键盘输入时触发    |
| bind:onsearch           |    Function    | ''         | 否              | 右侧点击事件    |
| bind:onfocus           |     Function    | ''         | 否              | 输入框聚焦时触发    |

