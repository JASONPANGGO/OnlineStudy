# onlinestudy

> Vue 2.6, vue-cli 3.0
> 两周内完成所有组件开发

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
### 跨域问题 做了一个服务器的中转站

```javascript
// 打开 中间代理请求服务器
// 安装依赖
npm install
// 运行
npm run runServer
// 然后就可以实现请求了

```

### 请求

封装了`libs`请求直接使用

并且绑到全局了VUE

直接在组件请求

例子login 

```javascript
this.$fetchPost("/user/login", {
            password: this.loginForm.pass,
            username: this.loginForm.userName
          }).then(data=>{
    // data 是返回的数据
})

```



