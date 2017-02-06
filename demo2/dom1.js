/**
 * Created by cmy on 2016/10/22.
 */
var MyComponent = React.createClass({
	handleClick: function() {
		React.findDOMNode(this.refs.myTextInput).focus();
		alert(this);
	},
	render: function() {
		return (
			<div>
				<input type="text" ref="myTextInput"/>
				<input type="button" value="s" onclick={this.handleClick}/>
			</div>
		);
	}
});

React.render(
	<MyComponent />,
		document.getElementById('demo1')
);