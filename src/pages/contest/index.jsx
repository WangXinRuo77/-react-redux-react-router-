import React from 'react';
import { Link } from 'react-router-dom';
import '@style/page_contest_index.less';
import '@style/page_index_index.less';
export default class Contest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name:'hello contest',
			path:{
				pathname:"",
				state:"",
			},
		}
	}

	componentWillMount() {

	}

	handleClick(index,pathNames,event){
			const data = {id:3,name:"sam",age:36};
			this.state.path.pathname = pathNames;
			this.state.path.state = data;
			this.props.history.push(this.state.path);
	}
	render(){
		// console.log(this.props.history);
		return (
			<main className="page-contest">
				<div className="module-designer">
						<h2 className="global-modlue-zh">虚拟数据的渲染</h2>
						<h3 className="global-modlue-en">Mock DATa</h3>
						<hr className="global-modlue-devide" />
						<div className="container">
							<ul className="designers clearfix">

								{
									mockData.length > 0 ? mockData.map((item, index) => {
										return <li key={index} className="designer">
										<p>
											<Link to={this.state.path}>
												<img src={item.src} onClick={this.handleClick.bind(this,index,item.id)}/>
											</Link>
										</p>
										<p className="name">{item.name}</p>
										<p className="job">{item.job}</p>
										<p className="work">{item.work}</p>
									</li>
									}) : null
								}
							</ul>
						</div>
					</div>
				<div className="component-banner">
					<div className="wrapper">
						<div className="container">
							<div className="sort">
								排序:<span className="item active" data-sort-type="1">初赛截止</span><span className="item" data-sort-type="2">作品数量</span><span className="item" data-sort-type="3">赛事金额</span>
							</div>
							<a className="deploy">企业发布赛事<i className="icon iconfont">&#xe615;</i></a>
						</div>
					</div>
				</div>
				<div className="component-contest">
					<div className="container clearfix">
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>

					</div>
					<div className="more">
						<a className="btn btn-large">
							更多赛事<span className="btn-en">/ALL</span><i className="icon iconfont btn-icon">&#xe615;</i>
						</a>
					</div>
				</div>
			</main>
		)
	}
}

const mockData = [
	{
		"name": "都人华1",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id":"/contest",
	},
	{
		"name": "都人华2",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id":"/about",
	},
	{
		"name": "都人华3",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id":"/launch",
	},
	{
		"name": "都人华4",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id":"/procedure"
	}
];