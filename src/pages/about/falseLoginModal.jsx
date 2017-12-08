import React, { Component } from 'react';
import '@style/page_modal.less';
import '@style/page_button.less';
import '@style/page_false_modal.less';

class FalseLoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findPassword: 3,
        }

        this.findPassword = this.findPassword.bind(this);
        this.returnLogin = this.returnLogin.bind(this);
    }

    findPassword() {
        this.setState({
            findPassword: 2,
        })
    }

    returnLogin() {
        this.setState({
            findPassword: 1,
        })
    }
    render() {
        return (
            <div className="page-modal">
                {this.state.findPassword == 1 ?
                    <div className="page-modal-box">
                        <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={this.props.closeFalseLogin} />
                        {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                        <div className="page-modal-main">
                            <p className="verify-cellphone">无法登录</p>
                            <p className="in-messages">两种方式帮你重新回到精于设计</p>
                            <div className="main-verify-box">
                                <button className="page-button find-password" >
                                    <span onClick={this.findPassword}>找回密码</span>
                                </button>
                                <button className="page-button">
                                    <span>人工申诉</span>
                                </button>
                            </div>
                        </div>
                    </div> :
                    <div className="page-modal-box">
                        <span className="special-symbol" onClick={this.returnLogin}></span>
                        <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={this.props.closeFalseLogin} />
                        {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                        <div className="page-modal-main">
                            <p className="verify-cellphone">找回密码</p>
                            <p className="find-messages">验证码将会发送至您的注册邮箱或手机</p>
                            <div className="page-modal-qp">
                                <img src="../../../static/image/qp.png" />
                            </div>
                            <div className="main-verify-box">
                                <input type="text" className="main-verify-input1" placeholder="邮箱或手机号" />
                                <button className="page-button verify-button">
                                    <span>获取验证码</span>
                                </button>
                            </div>
                        </div>
                    </div>
                }
                <div className="page-modal-box page-reset">
                    <span className="special-symbol" onClick={this.returnLogin}></span>
                    <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={this.props.closeFalseLogin} />
                    {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                    <div className="page-modal-main">
                        <p className="verify-cellphone">重设密码</p>
                        <p className="find-messages">验证码将会发送至您的注册邮箱或手机</p>
                        <div className="page-modal-qp">
                            <img src="../../../static/image/qp.png" />
                        </div>
                        <div className="main-verify-box">
                            <input type="text" className="main-verify-input1" />
                            <input type="password" className="main-verify-input1" />
                            <input type="text" placeholder="6位数验证码" className="main-verify-input2" />
                            <span className="verify-lever"></span>
                            <span className="verify-timer">{this.props.number2}秒后重发</span>
                            <button className="page-button verify-button">
                                <span>重设密码</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FalseLoginModal;