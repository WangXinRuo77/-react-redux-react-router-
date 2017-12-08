import React from 'react';
import { Link , Router, Route, Redirect, Switch } from 'react-router-dom';
import "@style/page_procedure_index.less"; 
import Demo from './demo';

export default class CustomerProcedure extends React.Component {
	constructor(props){
		super(props) 
	}

	componentWillReceiveProps(nextProps){
		// console.log(this.props.location);
		// console.log(nextProps.location);
		if(this.props.location.state != nextProps.location.state){
			this.props.location.state = nextProps.location.state
		}
	}
	render(){
		// console.log(this.props.location);
		return (
			<main className="component-customer">
				<div className="component-banner">
                    <h1 className="text-center">this is customer in procedure1111111111111</h1>
                    <Link to="/procedure/customer/demo">三级路由!!!!!!!!</Link>
                </div>
                <div className="component-">
						<Switch>
							{/* <Route exact path="/" component = {  } /> */}
                            <Route exact path="/procedure/customer/demo" component={ Demo } />
						</Switch>
				</div>
                
			</main>
		)
	}
}

