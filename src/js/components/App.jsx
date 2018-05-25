import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Home from './Home';
import Data from './Data';
import SignIn from './SignIn';
import Login from './Login'

class App extends React.Component{
	render(){
		return (
			<Router>
			<div className="app">
				<div className="menu">
					<Link to="/" style={{marginLeft:50, textDecoration:'none'}}>Home</Link>
					<Link to="/siginIn" style={{marginLeft:50,textDecoration:'none'}}>SignIn</Link>
					<Link to="/login" style={{marginLeft:50, textDecoration:'none'}}>Login</Link>
					<Link to="/data" style={{marginLeft:50, textDecoration:'none'}}>Data</Link>
				</div> 

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/data" component={Data} />
					<Route path="/siginIn" component={SignIn} />
					<Route path="/login" component={Login} />

				</Switch>
			</div>
			</Router>
		)
	}
}

export default App;