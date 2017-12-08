import React from 'react';

import "@style/page_launch_index.less"; 

import Validate from '@utils/regexp.js'

import { Input, Form,  } from 'antd';

const FormItem = Form.Item;

export default class Case extends React.Component {
	constructor(){
		super()
		this.state = {
			currentTab:"login",
			user:{
				account:"",
				passowrd:"",

			},

		}
	}
	componentDidMount() {
		// disabled submit button at beginning
		this.props.form.validateFields();
	}
	tabSwitch(tab){
		this.setState({
			currentTab:tab
		})
	}
	userLogin(){
		if(this.state.currentTab == 'login') {
			console.log(this.state)
		}
	}
	WriteAccount(event) {
		var Input = event.target || event.srcElement;
		if(Validate.test()) {

		}
		this.setState({
			user: {
				account:Input.value			
			}
		})
	}
	render(){
		let ShowLoginTab = this.state.currentTab == 'login' ? "block" :"none";
		let ShowRegisterTab = this.state.currentTab == 'register' ? "block" :"none";
		return (
			<main className="page-launch">	 
				<h1 className="title">发布赛事，精于帮你找到满意的设计</h1>
				<div className="component-account">
					<nav className="nav">
						<a onClick={ this.tabSwitch.bind(this,'login') }  className={ this.state.currentTab =="login"?"item item-active":"item" }>已有账号</a>
						<a onClick={ this.tabSwitch.bind(this,'register') }  className={ this.state.currentTab =="register"?"item item-active":"item"  }>没有账号</a>
					</nav>
					<div className="user">
						<div style={{ "display": this.state.currentTab == "login"?"block":"none" }} className="signup">
							<div className="item" >
								<span className="module-text">账号</span>
								<Input 
									value={ this.state.user.account } 
									onChange={ this.WriteAccount.bind(this) } type="text" placeholder="邮箱或手机" />
							</div>
							<p className="tip tip-account">请输入正确的账号</p>
							<div className="item">
								<span className="module-text">密码</span>
								<Input 
									type="password" 
									value={ this.state.user.password } 
									placeholder="密码" 
									onBlur={ this.userLogin.bind(this) } />
							</div>
						</div>
						<div style={{ "display": this.state.currentTab == "register"?"block":"none" }}  className="signin hide">
							<div className="item" >
								<span className="module-text">账号</span>
								<Input type="text" placeholder="邮箱或手机" />
							</div>
							<div className="item">
								<span className="module-text">密码</span>
								<Input type="password" placeholder="密码" />
							</div>
							<div className="item">
								<span className="module-text">确认密码</span>
								<Input type="password" placeholder="确认密码" />
							</div>													
						</div>
					</div>
				</div>
				<div className="component-company module-line">
					<h3 className="module-title">公司信息</h3>
					<div className="common-module-item">
						<span className="module-text">公司名称</span>
						<Input type="text" placeholder="公司名称" />
					</div>
					<div className="area">
						<span className="module-text">行业领域</span>
						<select>
							<option value="">请选择</option>
              <option value="互联网">互联网</option>
              <option value="金融">金融</option>
              <option value="教育培训">教育培训</option>
              <option value="房地产">房地产</option>
              <option value="物流">物流</option>
              <option value="医疗">医疗</option>
              <option value="传媒">传媒</option>
              <option value="汽车">汽车</option>
              <option value="服务">服务</option>
              <option value="咨询">咨询</option>
              <option value="政府">政府</option>
              <option value="农林牧渔">农林牧渔</option>
              <option value="军工">军工</option>
              <option value="消费">消费</option>
              <option value="其他">其他</option>
						</select>
					</div>
					<div className="office">
						<span className="module-text">公司官网(选填)</span>
						<span className="module-prefix">http://</span>
						<Input className="module-half-input" type="text" placeholder="输入网址" />
					</div>
					<div className="introduce">
						<span className="module-text">公司介绍</span>
						<textarea placeholder="描述一下您的公司，让设计师更懂你。"></textarea>
					</div>
				</div>
				<div className="component-contract">
					<div className="common-module-item">
						<span className="module-text">姓名</span>
						<Input type="text" placeholder="姓名" />
					</div>
					<div className="common-module-item">
						<span className="module-text">职务(选填)</span>
						<Input type="text" placeholder="职务" />
					</div>
					<div className="common-module-item">
						<span className="module-text">手机</span>
						<Input type="text" placeholder="手机" />
					</div>
					<div className="common-module-item">
						<span className="module-text">邮箱(选填)</span>
						<Input type="text" placeholder="邮箱" />
					</div>
				</div>
				<div className="component-repo">
					<div className="common-module-item">
						<span className="module-text">项目类型</span>
						<select>
              <option value="">请选择</option>
              <option value="LOGO/VI设计">LOGO/VI设计</option>
              <option value="海报/宣传册设计">海报/宣传册设计</option>
              <option value="WEB/H5设计">WEB/H5设计</option>
              <option value="APP设计">APP设计</option>
              <option value="产品/包装设计">产品/包装设计</option>
              <option value="插画/绘本设计">插画/绘本设计</option>
              <option value="更多">更多</option>							
						</select>
					</div>
					<div className="common-module-item">
						<span className="module-text">项目周期</span>
						<select>
              <option value="">请选择</option>
              <option value="小于1周">小于1周</option>
              <option value="1-2周">1-2周</option>
              <option value="2-4周">2-4周</option>
              <option value="1-2个月">1-2个月</option>
              <option value="2个月以上">2个月以上</option>
              <option value="不确定">不确定</option>							
						</select>
					</div>
					<div className="common-module-item">
						<span className="module-text">添加附件(选填)</span>
						<Input type="button" value="点击上传参考信息或项目说明（不超过10M）" />
					</div>
				</div>	
				<div className="module-loadmore">
					<p>继续填写更多信息？<i className="icon iconfont">&#xe674;</i></p>
				</div>	
				<div className="component-contract">
					<div className="common-module-item">
						<span className="module-text">数量要求(选填)</span>
						<Input type="text" placeholder="例如：几页H5" />
					</div>
					<div className="introduce">
						<span className="module-text">
							项目内容(选填)<i className="icon">?</i>
							<div className="popup-tax hide">
								<div className="container">
									<p>根据国家相关法律法规及征管部门要求，设计师参与设计竞赛所获竞赛奖金按照“劳务报酬”缴纳个人所得税，精于设计以自然月为单位对设计师申请提现金额代扣代缴个人所得税，税额具体算法如下：</p>
									<p>“月提现总金额”下简称“提现”</p>									
									<p>① 提现≤800元的，不扣缴个人所得税</p>									
									<p>② 800元＜提现≤4000元，个人所得税=(月提现金额-800)*20%</p>									
									<p>③ 4000元＜提现≤25000元，个人所得税=月提现金额*80%*20%</p>									
									<p>④ 25000元＜提现≤62500元，个人所得税=月提现金额*80%*30%-2000</p>									
									<p>⑤ 62500元＜提现，个人所得税=月提现金额*80%*40%-7000</p>									
								</div>
							</div>
						</span>
						<textarea placeholder="描述一下您的公司，让设计师更懂你。"></textarea>
					</div>
				</div>
				<div className="component-complete">
					<h3 className="module-title">公司信息</h3>
					<div className="common-module-item">
						<div className="office">
							<span className="module-text">公司官网(选填)</span>
							<span className="module-prefix">http://</span>
							<Input className="module-half-input" type="text" placeholder="输入网址" />
						</div>					
					</div>
				</div>	
				<div className="component-argee">
					<Input type="checkbox" id="argeeLaunch" />我已阅读并同意遵守 <a href="">《需求方竞赛须知》</a>
				</div>
				<div className="component-submit">
					<a className="btn btn-submit">提交竞赛</a>
				</div>
			</main>
		)
	}
}

