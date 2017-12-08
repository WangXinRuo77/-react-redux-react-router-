import React, { Component } from 'react';
import "@style/page-verify-modal.less";
import '@style/page_button.less';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 59,
            flag:1,
        }
        // this.clocking = this.clocking.bind(this);
    }

    // clocking(){
    //     this.setState((prevState)=>({
    //         number:prevState.number - 1,
    //     }))

    //     if(this.state.number == 0){
    //         clearInterval(this.timer);
    //     }
    // }

    // componentWillMount(){
    //     this.timer = setInterval(
    // 		() => this.clocking(),
    // 		1000
    // 	);
    // }   

    render() {
        return (
            <div className="page-modal">
                {this.state.flag == 1 ?
                    <div className="page-modal-box">
                        <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={this.props.closeModal} />
                        {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                        <div className="page-modal-main">
                            <p className="verify-cellphone">验证手机</p>
                            <p className="in-messages">请输入您收到的6位数短信验证码</p>
                            <div className="page-modal-qp">
                                <img src="../../../static/image/qp.png" />
                            </div>
                            <div className="main-verify-box">
                                <input type="text" className="main-verify-input1" />
                                <input type="text" placeholder="短信验证码" className="main-verify-input2" />
                                <span className="verify-lever"></span>
                                <span className="verify-timer">{this.props.number2}秒后重发</span>
                                <button className="page-button verify-button">
                                    <span>进入精于</span>
                                </button>
                            </div>
                        </div>
                    </div> : <div className="page-modal-box">
                        <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={this.props.closeModal} />
                        {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                        <div className="page-modal-main">
                            <p className="verify-cellphone">验证邮箱</p>
                            <p className="in-messages">请输入您收到的6位数邮箱验证码</p>
                            <div className="page-modal-qp">
                                <img src="../../../static/image/qp.png" />
                            </div>
                            <div className="main-verify-box">
                                <input type="text" className="main-verify-input1" />
                                <input type="text" placeholder="邮箱验证码" className="main-verify-input2" />
                                <span className="verify-lever"></span>
                                <span className="verify-timer">{this.props.number2}秒后重发</span>
                                <button className="page-button verify-button">
                                    <span>进入精于</span>
                                </button>
                            </div>
                        </div>
                    </div>
                }


            </div>
        )
    }
}

export default Modal;