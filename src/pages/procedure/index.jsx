import React from 'react';
import CustomerProcedure from './customer/index';
import DesignerProcedure from './designer';
import { Link, Router, Route, Redirect, Switch, IndexRoute, IndexRedirect } from 'react-router-dom';
import "@style/page_procedure_index.less";
import '@style/page_modal.less';

export default class Procedure extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		// console.log(this.props.location);
		// console.log(nextProps.location);
		if (this.props.location.state != nextProps.location.state) {
			this.props.location.state = nextProps.location.state
		}
	}

	render() {
		// console.log(this.props.history);
		// console.log(this.props.location);

		// console.log(this.props.history.location.state);
		// const data = JSON.parse(this.props.params.data2);

		return (
			<main>
				<div className="page-procedure">
					<div className="component-banner">
						<h1> this is procedure page!</h1>
						{/* <Link to="/procedure/customer">customer</Link><br /> */}
						<span>customer</span><br />
						<Link to="/procedure/designer">designer</Link>
					</div>
					<div>
						{/* <p>{this.props.location.state.name}</p> */}
					</div>
					<div className="component-">
						{/* <Route path="/procedure" render={() => (
							<Redirect to="/procedure/customer" />
						)} /> */}

						<Redirect to="/procedure/customer" />

						<Switch>
							{/* <Redirect from="/procedure" to="/procedure/customer" /> */}
							<Route path="/procedure/customer" component={CustomerProcedure} />
							<Route path="/procedure/designer" component={DesignerProcedure} />
						</Switch>
						{/* {/* <Route path="/procedure" component={Procedure}>
							{/* <IndexRoute component={CustomerProcedure} /> */}
						{/* <Route path="/procedure/customer" component={CustomerProcedure} />
							<Route path="/procedure/designer" component={DesignerProcedure} />
						</Route> */}
					</div>

				</div>
			</main>
		)
	}
}


// const Procedure = ({match}) => (
// 	<main>
// 		<div className="page-procedure">
// 			<div className="component-banner">
// 				<h1> this is procedure page!</h1>
// 				<Link to={`${match.url}/customer`}>customer</Link><br />
// 				<Link to={`${match.url}/designer`}>designer</Link>
// 			</div>
// 			<div className="component-">
// 				<Route path={`${match.url}/:procedure`} component={Procedure} />
// 				<Route path={`${match.url}/:customer`} component={CustomerProcedure} />
// 				<Route path={`${match.url}/:designer`} component={DesignerProcedure} />
// 				{/* <Route exact path={match.url} render={() => (
// 					<h3></h3>
// 				)} /> */}
// 			</div>
// 		</div>
// 	</main>
// )

// export default Procedure;
