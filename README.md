# 简介 

a project build by `react` ,`react-router`,`redux` and `antd`.


# 用法

```
	npm install webpack-dev-server -g
```




# 问题列表

1. how to place some method and varible  which is used in whole application. just like some regexp ?

2. why webpack-dev-server recompile so snow and must reload this page?

3. why webpack-dev-server will throw error never stop. it has threw more than 50 thousand?

4. how to make .css,.less,.sass,.styl etc, style file compiled by css-loader,less-loader,sass-loader,stylus-loader, and then make output in one css file?

5. 如何配置字体的文件路径

6. 开发环境中如何做到更改css不刷新页面？


# 解决方案


### 参考资料

> * [react-router-dom](https://reacttraining.com/react-router/web/example/basic)

> * [vue-cli](https://github.com/vuejs/vue-cli)


### 经验心得 

1. how to increase the speed of webpack first building and rebuild?

* use cheap-module-eval-source-map instead of other devtools can improve 40% speed

2. if using webpack-dev-server as http server ,so stats configure should be writen at *devServer*,should not be webpack config.

3. css文件loader解析顺序优先级：style-loader > css-loader > less-loader/sass-loader/stylus-loader


### 性能列表

* 2017/11/12
	* build(11s-12s) rebuild(1.5s)

### 优化

1. 去除不需要编译的模块