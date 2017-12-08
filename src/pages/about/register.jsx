import React, { Component } from 'react';
import '@style/page_button.less';
import '@style/page_about_register.less';
import '@style/page_modal.less';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overseas: true,
            flag: false,
        }
        this.registerWhale = this.registerWhale.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // 点击注册精于的验证手机弹框
    registerWhale() {
        this.setState({
            flag: true,
        },()=>{
            console.log(this.state.flag);
        })
        console.log(this.state.flag);
    }

    closeModal() {
        this.setState({
            flag: false,
        })
    }
    render() {
        return (
            <div>
                <div className="main-register-box">
                    <input type="text" placeholder="姓名" />
                    {this.state.overseas ? <input type="text" placeholder="手机号" /> : <input type="text" placeholder="手机号或邮箱（国外手机请写国际区号）" />}
                    <input type="text" placeholder="密码（不少于6位）" className="sInput" />
                    <div className="register-identity">
                        <p className="register_identity-p1">
                            <span className="register_identity-one">我是设计师</span>
                        </p>
                        <p>
                            <span className="register-identity-two">我代表企业</span>
                        </p>
                    </div>
                    <div className="register-agree">
                        <p className="register-agree-tick">
                            <img src="../../../static/image/Rectangle 7.png" />
                        </p>
                        <p className="register-agree-text">
                            <span>我已阅读并同意</span>
                            <span className="sColor">《精于设计用户协议》</span>
                        </p>
                    </div>
                    <button className="page-button register-button">
                        <span onClick={this.props.openModal}>注册精于设计</span>
                    </button>
                </div>
            </div>
        )
    }

}
export default Register;