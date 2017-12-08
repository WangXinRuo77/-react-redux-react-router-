import React, { Component } from 'react';
import '@style/page_about_login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMethodFlag: 1,
        }
        this.changeLoginMethod = this.changeLoginMethod.bind(this);
        this.changeMethod = this.changeMethod.bind(this);
    }

    changeLoginMethod() {
        this.setState({
            loginMethodFlag: 2,
        })
    }
    
    changeMethod(){
        this.setState({
            loginMethodFlag: 1,
        })
    }
    render() {
        return (
            <div>
                {
                this.state.loginMethodFlag == 1 ?
                    <div className="main-login-box">
                        <input type="text" placeholder="手机号" />
                        <input type="text" placeholder="短信验证码" />
                        <span className="login-lever"></span>
                        <span className="login-verification-code">发送验证码</span>
                        <button className="page-button">
                            <span>登录</span>
                        </button>
                        <p className="login-method">
                            <span onClick={this.changeLoginMethod} className="login-password">密码登录（手机号或邮箱）</span>
                        </p>
                        <p className="login-title">
                            <span>社交账户登录</span>
                        </p>
                        <div className="login-image">
                            <div className="">图片1</div>
                            <div className="">图片2</div>
                            <div className="">图片3</div>
                        </div>
                    </div>
                    : 
                    <div className="main-login-box">
                        <input type="text" placeholder="手机号或邮箱" />
                        <input type="text" placeholder="密码" />
                        <button className="page-button ">
                            <span>登录</span>
                        </button>
                        <p className="login-method">
                            <span className="login-verification" onClick={this.changeMethod}>手机验证码登录</span>
                            <span className="login-failure" onClick={this.props.changeFalseLogin}>无法登录</span>
                        </p>
                        <p className="login-title">
                            <span>社交账户登录</span>
                        </p>
                        <div className="login-image">
                            <div className="">图片1</div>
                            <div className="">图片2</div>
                            <div className="">图片3</div>
                        </div>
                    </div>
            }
            </div>
        )
    }
}

export default Login;