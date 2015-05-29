var $ = require('jquery');
console.log($);
var React = require('react');
var Blog = require('./components/Blog');

var App = React.createClass({
    render() {
        return <Blog />;
    }
});

React.render(<App />, document.body);