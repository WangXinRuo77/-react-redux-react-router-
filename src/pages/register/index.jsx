import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory} from 'react-router';
import '@style/page_register.less';
import regexp from '@utils/regexp';
import actions  from '../../actions/userinfo.js'
import { trim, isEmpty } from '@utils/common'

import { Row, Col, Input, Button, message } from 'antd';

class PageRegister extends React.Component {
	constructor () {
		super()
		this.state = {
			account:"",
			password:"",
			repeatPassword:""
		}
	}
	Register(ev){
		let account = trim(this.state.account);
		let password = trim(this.state.password);
		let repeatPassword = trim(this.state.repeatPassword);
		// this.props.history.go('/')
		console.log(this.props)
		if(isEmpty(account)) {
			message.error('请输入手机号');
			return;
		};
		if(!regexp.mobile.test(account)) {
			message.error('请输入正确的手机号');
			return;
		}
		if(isEmpty(password)) {
			message.error('请输入密码');
			return;
		};		
		if(password.length < 6) {
			message.error('密码长度不能低于6位');
			return;
		}
		if(isEmpty(repeatPassword)) {
			message.error('请输入确认密码');
			return;
		}
		if(password !== repeatPassword) {
			message.error('密码与确认密码不一致');
			return;
		}
		// 通过注册，获取用户信息，派发全局
		this.props.dispatch({
			type:"SaveUserInfo",
			state:{ 
				id:new Date().getTime(),
				name:'test',
				avatar:'test',
				email:'test',
				mobile:account
			}
		})
	}
	editAccount(ev){
		var element = ev.target || ev.srcElement;
		var account = element.value;
		this.setState({
			account
		})		
	}
	editPassword(ev){
		var element = ev.target || ev.srcElement;
		var password = element.value;
		this.setState({
			password
		})
	}
	editRepeatPassword(ev){
		var element = ev.target || ev.srcElement;
		var repeatPassword = element.value;
		this.setState({
			repeatPassword
		})		
	}
	render(){
		return(
			<main className="page-register">
				<Row>
					<Col span={8} offset={8}>
						<Input className="input-item" onChange={this.editAccount.bind(this)} size="large" type='text' placeholder="请输入手机号" />
						<Input className="input-item" onChange={this.editPassword.bind(this)}  size="large" type="password" placeholder="请输入密码" />
						<Input className="input-item" onChange={this.editRepeatPassword.bind(this)} size="large" type="password" placeholder="请确认密码" />
						<Button className="input-item" onClick={ this.Register.bind(this) } type='primary' >注册</Button>
					</Col>
				</Row>
			</main>
		)
	}
}
const getUserInfo = state => {
	return {
		userinfo:state.user
	}
}; 
export default connect(getUserInfo)(PageRegister)