import React, { Component } from 'react';
import '@style/page_modal.less';
import '@style/page_input.less';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            number: 2,
            text: "",
            password: "",
        }
    }

    closeModal = (number) => {
        this.setState({
            visible: false,
        })
    }

    // saveData = () => {
    //     console.log(this.state.text);
    //     console.log(this.state.password);
    // }
    saveData = () => {
        this.props.saveData();
        this.setState({
            visible: false,
        })
    }

    // clickMe = (e) => {
    //     console.log(e);
    // }

    // changeValue = (e) => {
    //     console.log(e.target.value);
    // }
    render() {
        const number = 1;
        return (
            <div>
                {this.state.visible ? <div className="page-modal">
                    <div className="page-modal-box">
                        <img src="../../../static/image/Combined Shape.png" className="page-modal-close" onClick={() => this.closeModal(this.state.number)} />
                        <img src="../../../static/image/qp.png" onClick={this.saveData} />
                        {/* <button onClick={(e)=>{this.clickMe(e)}}>点我</button> */}
                        {/* <input type="text" onChange={(e)=>{this.changeValue(e)}} placeholder="来打我"/> */}
                        {/* <span className="page-modal-close" onClick={this.closeModal}>x</span> */}
                        {this.props.children}
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Modal;