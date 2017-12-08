import React from 'react';
import { Tabs, Form, Input } from 'antd';

import "@style/page_launch_index.less";
import '@style/page_input.less';

import Validate from '@utils/regexp.js';
import Modal from './modal';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class Launch extends React.Component {
	constructor() {
		super()
		this.state = {
			//   text:"",
			//   password:"",
		}
	}
	componentDidMount() {
		// disabled submit button at beginning
		// this.props.form.validateFields();
	}

	saveValue = (e) => {
		this.setState({
			text: e.target.value,
		})
	}

	saveValue2 = (e) => {
		this.setState({
			password: e.target.value,
		})
	}

	saveData = () => {
		console.log(this.state.text);
		console.log(this.state.password);
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const componentParams = {
			saveData: this.saveData,
		}
		return (
			< main className="page-launch" >
				<h1 className="title" > 发布赛事， 精于帮你找到满意的设计 </h1>
				<Tabs defaultActiveKey="1" onChange={this.Switch} >
					<TabPane tab="Tab 1" key="1" >
						<FormItem label="账号">
							<Input placeholder="账号" {...getFieldDecorator('account') } />
						</FormItem>
					</TabPane>
					<TabPane tab="Tab 2" key="2" > Content of Tab Pane 2 </TabPane>
				</Tabs>
				<Modal
					{...componentParams}
				>
					<div>
						<p>找回密码</p>
						<p>验证码将会发送至您的注册邮箱或手机</p>
						<input type="text" onChange={(e) => { this.saveValue(e) }} />
						<input type="password" onChange={(e) => { this.saveValue2(e) }} />
						<button>提交</button>
					</div>
				</Modal>
			</main>
		)
	}
}

export default Form.create()(Launch);