# Vue 后台管理系统基础模板

### [在线预览](https://woai3c.github.io)
### 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [vuex](https://vuex.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)

### 功能

#### 标签栏
* 点击标签切换页面
* 刷新当前标签页
* 关闭其他标签/关闭所有标签

```js
// 在router文件中
{
    path: 'home',
    name: 'home',
    component: () => import('../views/Home.vue')
}

// 在Home.vue中
export default {
    name: 'home'
}
```
#### 登录
* 如果在未登陆的情况下访问指定页面 将会重定向到登陆页
* 
#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（使用用iView组件）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 动态菜单栏
* 可以根据数据动态生成菜单

#### 面包屑
* 展示当前页面的路径


### 使用
npm i

UI库使用的是`iView` 有大量的组件可用 
```

#### 启动
```
npm run serve
```

#### 打包
````
npm run build
````
如果不是服务器根目录则需要更改打包的路径，打开 `vue.config.js` 文件，添加如下代码
```js
publicPath: './',
```
添加后如下所示
```js
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxxx/device/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}
```
