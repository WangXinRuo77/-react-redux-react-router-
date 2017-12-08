import React from 'react';
import {
	Link
} from 'react-router-dom';
import Demo from '../demo/index';
import Form from '../form/index';
import '@style/page_index_index.less';
import '@style/page_button.less';
import { connect } from 'react-redux';
import { changeTextAction,buttonClickAction } from '../../actions/userinfo';
class Index extends React.Component {
	constructor() {
		super()
		this.state = {
			name: 'hello index',

		}
	}
	componentWillMount() {
		// console.log()
	}
	render() {
		const { text,onButtonClick,onChangeText } = this.props;
		// console.log(this.props.text,"111111111111");
		return (
			<main>
				<div className="page-index" style={{ "minHeight": "2000px" }}>
					<div className="module-banner" >
						<div>
							<h1 onClick={onChangeText}> {text} </h1>
							<button onClick={onButtonClick}>click me</button>
						</div>
						<button className="page-button">
							<span className="page-button-content">注册</span>
						</button>
					</div>
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
												<Link to={item.id + "?name=" + item.name + "&job=" + item.job}>
													<img src={item.src} />
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
					<div className="module-designer">
						<Form />
					</div>
					{/* banner */}
					<div className="module-banner" >
						<div className="banner-panel">
							<h3 className="global-modlue-zh">有钱有趣有原则的设计竞赛</h3>
							<h3 className="global-modlue-en">Whale Design, Desi1gn Will.</h3>
							<div className="usage">
								<div className="usage-item customer">
									<p className="usage-text"><a href="">企业</a></p>
									<p className="usage-text  pt10"><a href="">如何完成需求？</a></p>
								</div>
								<div className="usage-item designer">
									<p className="usage-text"><a href="">设计师</a></p>
									<p className="usage-text  pt10"><a href="">如何使用精于？</a></p>
								</div>
							</div>
						</div>
					</div>
					{/* category */}
					<div className="module-category">
						<h2 className="global-modlue-zh">竞赛类型</h2>
						<h3 className="global-modlue-en">Recommended Design</h3>
						<hr className="global-modlue-devide" />
						<ol className="category-list">
							<li className="category-item">
								<i className="category-icon icon-brand"></i>
								<p className="category-title">品牌设计</p>
								<p className="category-detail">
									<span>LOGO</span><span>VI</span><span>定位</span>
								</p>
							</li><li className="category-item">
								<i className="category-icon icon-product"></i>
								<p className="category-title">产品设计</p>
								<p className="category-detail">
									<span>包装</span><span>产品</span><span>插画</span>
								</p>
							</li><li className="category-item">
								<i className="category-icon icon-series"></i>
								<p className="category-title">连锁店设计</p>
								<p className="category-detail">
									<span>体系</span><span>体验</span><span>室内</span>
								</p>
							</li>

						</ol>
					</div>
					{/* contests */}
					<div className="module-contests">
						<h2 className="global-modlue-zh">不断更新的赛事，总有一个适合你</h2>
						<h3 className="global-modlue-en">Recommended Design</h3>
						<hr className="global-modlue-devide" />
						<ul className="contest-list clearfix">
							<li className="contest-item">
								<div className="conainer">
									<img className="contest-thumb" src={require('@image/free_network_banner.png')} width="225" height="150" />
									<h4 className="mt20">真个基金</h4>
									<div className="contest-label fs12 mt10  mb20 clearfix">
										<span className="left category">LOGO设计</span>
										<span className="right status">初赛<i className="global-modlue-contest-dot"></i>征稿中</span>
									</div>
									<div className="contest-data clearfix">
										<div className="data-item data-award">
											<i className="icon iconfont icon-award">&#xe73f;</i>30,300
										</div>
										<div className="data-item data-entry">
											<i className="icon iconfont icon-entry">&#xe627;</i>321
										</div>
										<div className="data-item data-viewer">
											<i className="icon iconfont icon-viewer">&#xe622;</i>12345
										</div>
									</div>
								</div>
								<div className="banner">
									与十年前360将杀毒软件免费的方法相似，通过广告置换的模式将宽带免费。该项目本身以宽带为切入点，实际上是一个广告分发平台。未来还可能涉及免费的水费、电费、燃气费等等。
									<i className="icon iconfont">&#xe615;</i>
								</div>
							</li>
							<li className="contest-item">
								<div className="conainer">
									<img className="contest-thumb" src={require('@image/free_network_banner.png')} width="225" height="150" />
									<h4 className="mt20">真个基金</h4>
									<div className="contest-label fs12 mt10  mb20 clearfix">
										<span className="left category">LOGO设计</span>
										<span className="right status">初赛<i className="global-modlue-contest-dot"></i>征稿中</span>
									</div>
									<div className="contest-data clearfix">
										<div className="data-item data-award">
											<i className="icon iconfont icon-award">&#xe73f;</i>30,300
										</div>
										<div className="data-item data-entry">
											<i className="icon iconfont icon-entry">&#xe627;</i>321
										</div>
										<div className="data-item data-viewer">
											<i className="icon iconfont icon-viewer">&#xe622;</i>12345
										</div>
									</div>
								</div>
								<div className="banner">
									与十年前360将杀毒软件免费的方法相似，通过广告置换的模式将宽带免费。该项目本身以宽带为切入点，实际上是一个广告分发平台。未来还可能涉及免费的水费、电费、燃气费等等。
									<i className="icon iconfont">&#xe615;</i>
								</div>
							</li>
							<li className="contest-item">
								<div className="conainer">
									<img className="contest-thumb" src={require('@image/free_network_banner.png')} width="225" height="150" />
									<h4 className="mt20">真个基金</h4>
									<div className="contest-label fs12 mt10  mb20 clearfix">
										<span className="left category">LOGO设计</span>
										<span className="right status">初赛<i className="global-modlue-contest-dot"></i>征稿中</span>
									</div>
									<div className="contest-data clearfix">
										<div className="data-item data-award">
											<i className="icon iconfont icon-award">&#xe73f;</i>30,300
										</div>
										<div className="data-item data-entry">
											<i className="icon iconfont icon-entry">&#xe627;</i>321
										</div>
										<div className="data-item data-viewer">
											<i className="icon iconfont icon-viewer">&#xe622;</i>12345
										</div>
									</div>
								</div>
								<div className="banner">
									与十年前360将杀毒软件免费的方法相似，通过广告置换的模式将宽带免费。该项目本身以宽带为切入点，实际上是一个广告分发平台。未来还可能涉及免费的水费、电费、燃气费等等。
									<i className="icon iconfont">&#xe615;</i>
								</div>
							</li>
							<li className="contest-item">
								<div className="conainer">
									<img className="contest-thumb" src={require('@image/free_network_banner.png')} width="225" height="150" />
									<h4 className="mt20">真个基金</h4>
									<div className="contest-label fs12 mt10  mb20 clearfix">
										<span className="left category">LOGO设计</span>
										<span className="right status">初赛<i className="global-modlue-contest-dot"></i>征稿中</span>
									</div>
									<div className="contest-data clearfix">
										<div className="data-item data-award">
											<i className="icon iconfont icon-award">&#xe73f;</i>30,300
										</div>
										<div className="data-item data-entry">
											<i className="icon iconfont icon-entry">&#xe627;</i>321
										</div>
										<div className="data-item data-viewer">
											<i className="icon iconfont icon-viewer">&#xe622;</i>12345
										</div>
									</div>
								</div>
								<div className="banner">
									与十年前360将杀毒软件免费的方法相似，通过广告置换的模式将宽带免费。该项目本身以宽带为切入点，实际上是一个广告分发平台。未来还可能涉及免费的水费、电费、燃气费等等。
									<i className="icon iconfont">&#xe615;</i>
								</div>
							</li>
						</ul>
						<a href="" className="btn btn-all">
							全部赛事<span className="btn-en">/ALL</span><i className="icon iconfont btn-icon">&#xe615;</i>
						</a>
					</div>
					{/* slider */}
					<div className="module-slider slider">
						<ul className="slide-list">
							<li className="slide-item">
								<div className="container">
									<h2 className="slide-en">For Designers</h2>
									<h3 className="slide-zh">精于坚守设计的价值</h3>
									<div className="slide-detail">
										<p>1.全部竞赛高奖金额高获奖率，设计有价有尊严</p>
										<p>2.竞赛种类多样且不断更新，总能找到你喜欢的项目</p>
										<p>3.英雄不问出处，竞赛全程匿名制投稿，用设计证明你自己</p>
									</div>
									<a className='btn btn-primary mt30' href="">设计师入驻精于<i className="icon iconfont btn-icon">&#xe615;</i></a>
								</div>
							</li>
							<li className="slide-item">
								<div className="container">
									<h2 className="slide-en">For Designers</h2>
									<h3 className="slide-zh">精于坚守设计的价值</h3>
									<div className="slide-detail">
										<p>1.全部竞赛高奖金额高获奖率，设计有价有尊严</p>
										<p>2.竞赛种类多样且不断更新，总能找到你喜欢的项目</p>
										<p>3.英雄不问出处，竞赛全程匿名制投稿，用设计证明你自己</p>
									</div>
									<a className='btn btn-primary mt30' href="">设计师入驻精于<i className="icon iconfont btn-icon">&#xe615;</i></a>
								</div>
							</li>
						</ul>
						<i className="icon iconfont slider-arrow slider-arrow-left">&#xe660;</i>
						<i className="icon iconfont slider-arrow slider-arrow-right">&#xe649;</i>
						<div className="slider-pager">
							<div className="container">
								<span className="slider-pager-item slider-pager-item-active "></span><span className="slider-pager-item"></span>
							</div>
						</div>
					</div>
					{/* products */}
					<div className="module-product clearfix">
						<h2 className="global-modlue-zh">每一份作品，都体现了设计的价值</h2>
						<h3 className="global-modlue-en">Recommended Design</h3>
						<hr className="global-modlue-devide" />
						<ul className="products">
							<li className="item">
								<a href="">
									<div className="container">
										<img src={require('@image/free_network_banner.png')} width="225" height="150" className="thumb" />
										<p className="title">眼·鲸</p>
										<p className="contest">画条鲸鱼，给精于设计做Logo</p>
										<div className="data">
											<div className="data-item data-comment">
												<i className="icon iconfont icon-comment">&#xe612;</i>302
											</div>
											<div className="data-item data-like">
												<i className="icon iconfont icon-like">&#xe61b;</i>321
											</div>
											<div className="data-item data-viewer">
												<i className="icon iconfont icon-viewer">&#xe622;</i>12345
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="item">
								<a href="">
									<div className="container">
										<img src={require('@image/free_network_banner.png')} width="225" height="150" className="thumb" />
										<p className="title">眼·鲸</p>
										<p className="contest">画条鲸鱼，给精于设计做Logo</p>
										<div className="data">
											<div className="data-item data-comment">
												<i className="icon iconfont icon-comment">&#xe612;</i>200
											</div>
											<div className="data-item data-like">
												<i className="icon iconfont icon-like">&#xe61b;</i>321
											</div>
											<div className="data-item data-viewer">
												<i className="icon iconfont icon-viewer">&#xe622;</i>12345
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="item">
								<a href="">
									<div className="container">
										<img src={require('@image/free_network_banner.png')} width="225" height="150" className="thumb" />
										<p className="title">眼·鲸</p>
										<p className="contest">画条鲸鱼，给精于设计做Logo</p>
										<div className="data">
											<div className="data-item data-comment">
												<i className="icon iconfont icon-comment">&#xe612;</i>200
											</div>
											<div className="data-item data-like">
												<i className="icon iconfont icon-like">&#xe61b;</i>321
											</div>
											<div className="data-item data-viewer">
												<i className="icon iconfont icon-viewer">&#xe622;</i>12345
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="item">
								<a href="">
									<div className="container">
										<img src={require('@image/free_network_banner.png')} width="225" height="150" className="thumb" />
										<p className="title">眼·鲸</p>
										<p className="contest">画条鲸鱼，给精于设计做Logo</p>
										<div className="data">
											<div className="data-item data-comment">
												<i className="icon iconfont icon-comment">&#xe612;</i>200
											</div>
											<div className="data-item data-like">
												<i className="icon iconfont icon-like">&#xe61b;</i>321
											</div>
											<div className="data-item data-viewer">
												<i className="icon iconfont icon-viewer">&#xe622;</i>12345
											</div>
										</div>
									</div>
								</a>
							</li>

						</ul>
					</div>
					{/* designers */}
					<div className="module-designer">
						<h2 className="global-modlue-zh">来自各领域优秀设计师的聚集地</h2>
						<h3 className="global-modlue-en">Designers</h3>
						<hr className="global-modlue-devide" />
						<div className="container">
							<ul className="designers clearfix">
								<li className="designer">
									<img src={require('@image/free_network_banner.png')} width="180" height="120" className="avatar" />
									<div className="intro">
										<p className="name">都人华</p>
										<p className="job">腾讯高级交互设计师</p>
										<p className="work">主导腾讯街景,车联网等设计工作</p>
									</div>
								</li>
								<li className="designer">
									<img src={require('@image/free_network_banner.png')} width="180" height="120" className="avatar" />
									<div className="intro">
										<p className="name">都人华</p>
										<p className="job">腾讯高级交互设计师</p>
										<p className="work">主导腾讯街景,车联网等设计工作</p>
									</div>
								</li>
								<li className="designer">
									<img src={require('@image/free_network_banner.png')} width="180" height="120" className="avatar" />
									<div className="intro">
										<p className="name">都人华</p>
										<p className="job">腾讯高级交互设计师</p>
										<p className="work">主导腾讯街景,车联网等设计工作</p>
									</div>
								</li>
								<li className="designer">
									<img src={require('@image/free_network_banner.png')} width="180" height="120" className="avatar" />
									<div className="intro">
										<p className="name">都人华</p>
										<p className="job">腾讯高级交互设计师</p>
										<p className="work">主导腾讯街景,车联网等设计工作</p>
									</div>
								</li>
								<li className="designer">
									<img src={require('@image/free_network_banner.png')} width="180" height="120" className="avatar" />
									<div className="intro">
										<p className="name">都人华</p>
										<p className="job">腾讯高级交互设计师</p>
										<p className="work">主导腾讯街景,车联网等设计工作</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* customer */}
					<div className="module-customer">
						<div className="container">
							<h2 style={{ "textAlign": "left" }} className="global-modlue-zh">他们在精于得到了满意的回馈</h2>
							<h3 style={{ "textAlign": "left" }} className="global-modlue-en text-left">Recommended Design</h3>
							<hr className="global-modlue-devide" />
							<ul className="customers clearfix">
								<li className="customer">
									<a href="">
										<img src={require('@image/free_network_banner.png')} width="250" height="150" />
									</a>
								</li>
								<li className="customer">
									<a href="">
										<img src={require('@image/free_network_banner.png')} width="250" height="150" />
									</a>
								</li>
								<li className="customer">
									<a href="">
										<img src={require('@image/free_network_banner.png')} width="250" height="150" />
									</a>
								</li>
								<li className="customer">
									<a href="">
										<img src={require('@image/free_network_banner.png')} width="250" height="150" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

//映射Redux state到组件的属性  
function mapStateToProps(state) {
	return { text: state.number.text }
}

//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch) {
	return {
		onButtonClick: () => dispatch(buttonClickAction()),
		onChangeText: () => dispatch(changeTextAction()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);


const mockData = [
	{
		"name": "都人华1",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id": "/contest",
	},
	{
		"name": "都人华2",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id": "/about",
	},
	{
		"name": "都人华3",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id": "/launch",
	},
	{
		"name": "都人华4",
		"job": "腾讯高级交互设计师",
		"work": "主导腾讯街景",
		"src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511428711322&di=51e1f5a113de915b864c814051f053a0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D335544447%2C2386351584%26fm%3D214%26gp%3D0.jpg",
		"id": "/procedure"
	}
];