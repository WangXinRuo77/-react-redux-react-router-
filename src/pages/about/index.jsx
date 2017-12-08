import React from 'react';
import '@style/page_modal.less';
import '@style/page_about.less';

import Register from './register';
import Login from './login';
import Modal from './modal';
import FalseLoginModal from './falseLoginModal';


export default class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			number: 0,
			flag: false,
			registerStatus: 1,
			number2: 59,
			falseLogin: false,
		}
		this.click = this.click.bind(this);
		this.tick = this.tick.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.switchRegister = this.switchRegister.bind(this);
		this.switchLogin = this.switchLogin.bind(this);
		this.clocking = this.clocking.bind(this);
		this.openFalseLogin = this.openFalseLogin.bind(this);
		this.closeFalseLogin = this.closeFalseLogin.bind(this);
	}

	tick() {
		this.setState(prevState => ({
			number: prevState.number + 4,
		}))
		this.refs.name.style.bottom = this.state.number + "px";
		this.refs.age.style.height = this.state.number + "px";
		// console.log(this.refs.name.offsetTop);
		if (this.refs.name.offsetTop == 0) {
			clearInterval(this.timer);
			this.props.history.push('./');
		}
	}

	clocking() {
		this.setState((prevState) => ({
			number2: prevState.number2 - 1,
		}))

		if (this.state.number2 == 0) {
			clearInterval(this.timer);
		}
	}

	click() {
		this.timer = setInterval(
			() => this.tick(),
			5
		);
	}

	openModal() {
		// debugger;
		this.setState({
			flag: true,
			number2: 59,
		});
		this.timer = setInterval(
			() => this.clocking(),
			1000
		);

	}

	closeModal() {
		this.setState({
			flag: false,
		})
		clearInterval(this.timer);
	}
	// 注册页面的点击事件
	switchRegister() {
		this.setState({
			registerStatus: 1,
		})
		this.refs.login.style.color = "rgba(153,153,153,1)";
		this.refs.register.style.color = "rgba(101,180,255,1)";
		this.refs.tail.style.marginLeft = "157px";
	}

	switchLogin() {
		this.setState({
			registerStatus: 2,
		})
		this.refs.login.style.color = "rgba(101,180,255,1)";
		this.refs.register.style.color = "rgba(153,153,153,1)";
		this.refs.tail.style.marginLeft = "285.5px";
	}

	// 点击无法登录显示弹框
	openFalseLogin() {
		this.setState({
			falseLogin: true,
		})
	}

	// 
	closeFalseLogin() {
		this.setState({
			falseLogin: false,
		})
	}
	render() {
		const componentParams = {
			openModal: this.openModal,
			closeModal: this.closeModal,
			number2: this.state.number2,
			changeFalseLogin: this.openFalseLogin,
			closeFalseLogin: this.closeFalseLogin,
		}

		return (
			<div className="waveWrapper">
				<div className="wave-box" ref="name">
					<div className="wave waveTop"></div>
					<div className="wave waveMiddle"></div>
					<div className="wave waveBottom"></div>
				</div>
				<div className="waveBottom-box" ref="age"></div>
				<div className="main-box">
					<div className="main-logo">
						<img src="../../../static/image/logo.png" />
					</div>
					<div className="main-tab">
						<span onClick={this.switchRegister} className="main-register common" ref="register">注册</span>
						<span onClick={this.switchLogin} className="main-login common" ref="login">登录</span>
					</div>
					<div className="register-tail" ref="tail">
						<img src="../../../static/image/qp.png" />
					</div>
					{
						this.state.registerStatus == 1 ?
							<Register {...componentParams} />
							: <Login {...componentParams} />
					}
				</div>
				{this.state.flag ? <Modal {...componentParams} /> : null}
				{this.state.falseLogin ? <FalseLoginModal {...componentParams} /> : null}
				{/* <div className="invite-bind">
					<p className="title">邀请绑定微信</p>
					<p className="content">绑定微信账号会帮助您更容易的接收到精于消息</p>
					<div className="wei-xin-box">
						<span>微信图片</span>
					</div>
					<p className="nBind">暂不绑定，以后提醒</p>
				</div> */}
			</div>
		)
	}
}

