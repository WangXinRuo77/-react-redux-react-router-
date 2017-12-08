import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:true,
        }

        this.changeFlag = this.changeFlag.bind(this);
    }

    changeFlag() {
        this.setState(prevState => ({
            flag: !prevState.flag,
        }))
        this.props.receiveFlag(this.state.flag);
        // console.log(this.refs.faCai);
    }

    render() {
        const { date,number,age,changeValue } = this.props;
        return (
            <div >
                <div>
                    <h1>这是子组件的传值{date}</h1>
                    <h2>{number}</h2>
                </div>
                <div>
                    <p>{age}</p>
                    <button  onClick={changeValue}>点我增加年龄，请看上方</button>
                </div>
                <div>
                    <p onClick={this.changeFlag}>{this.state.flag}111111</p>
                </div>
                <div ref="faCai">888888888888</div>
            </div>
        )
    }
}

export default Footer;
// 在获取数据渲染页面的时候一定要注意判空处理。