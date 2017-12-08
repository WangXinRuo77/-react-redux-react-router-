import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import Reducer from './reducers/index'
import ReactDOM from 'react-dom';
import Storage from "@utils/storage";
import RouteConfig from './router/route'; // 路由配置
import SaveUserInfo from '@actions/userinfo';

// const logger = createLogger();
let store = createStore(
	Reducer,
	applyMiddleware(thunk, logger)
);
// 获取存储在Localstorage中的uid
let Account = Storage.get('user');
//存在证明用户已经登陆，存储在stora中，派发全局
if(Account && Account.id) {
	store.dispatch({
		type:"SaveUserInfo",
		state:Storage.get('user')
	})
}
store.subscribe(function (){
	console.log(store.getState())
})
console.log(store.getState())
import 'antd/dist/antd.min.css';
// ui theme 
import '../ui/default.less';
// iconfont
import '../static/fonts/iconfont.css'

ReactDOM.render(
	<Provider store= { store }>
		<RouteConfig />
	</Provider>,
	document.querySelector('#app')
)