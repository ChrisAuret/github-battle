var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = Router.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = {
    <Router>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home} />
        </Route>
    </Router>
}

module.exports routes;