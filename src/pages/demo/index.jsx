import React, { Component } from 'react';
import '@style/page_demo_index.less';
import Footer from './footer';


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            number: 0,
            isToggleOn: true,
            name: '',
            age:20,
        }

        // this.handleClick = this.handleClick.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.receiveFlag = this.receiveFlag.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        // this.timeID = setInterval(
        //     () => this.tick(),
        //     1000
        // );

        // 请求数据
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => ({
            date: new Date(),
            number: prevState.number + 1,
        }))
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }))
    }

    changeName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    changeValue(){
        this.setState(prevState => ({
            age: prevState.age+1,
        }))

    }

    receiveFlag(flag) {
        alert(flag);
    }
    render() {
        const ComponentParams = {
            date: this.state.date.toLocaleTimeString(),
            number: this.state.number,
            changeValue: this.changeValue,
            age: this.state.age,
            receiveFlag:this.receiveFlag,
        }
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h3>这是数字{this.state.number}</h3>
                {/* <button onClick={this.handleClick}>
                    {this.state.isToggleOn? 'ON' : 'OFF'}
                </button> */}
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <input type="text" onChange={(e) => this.changeName(e)} />
                <h4>{this.state.name}</h4>
                {
                    this.state.isToggleOn ?
                        <p>最随便写点什么</p> : <p>好想看电影，但是我还不知道看什么</p>
                }
                <ul>
                    {listItems}
                </ul>
                {
                    posts.length>0 ? posts.map((item,index) => 
                        <p key={item.id}>{item.content}</p>
                    ):null
                }
                <p>下面是子组件</p>
                <Footer
                    {...ComponentParams}
                />
                <p onClick={this.receiveFlag}>点我看我能弹出来什么</p>
            </div>
        )
    }
}

export default Demo;
// 遍历虚拟数据
// 一个好的经验法则是map()调用中的元素需要键，最好是id，其次是索引。
const numbers = [1, 2, 3, 4, 5, 6, 7];
const listItems = numbers.map((item, index) => <li key={index}>{item}</li>);

// mock数据
const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];