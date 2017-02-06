var MyMount = React.createClass({
	getInitialState: function(){
		return {
			width:20,
			backbg:'green',
			height: 90
		};
	},
	componentWillMount: function(){
		this.setState({
			backbg:'#000'
		});
		// alert('componentWillMount');
	},
	componentDidMount: function(){
		console.log('fds');
		var timer1 = setInterval(function(){
			var width = this.state.width;
			width += 10;
			if(width >= 120){
				width = 10;
			}
			this.setState({
				width: width,
				backbg:'green'
			});
		}.bind(this),200);
	},
	componentWillUpdate: function (nextProps, nextState) {
		console.log(nextProps, nextState);
	},
	render:function(){
		return (
			<div style={{height:'40px',width:this.state.width+'px',background:this.state.backbg}}></div>
		);
	}
});
ReactDOM.render(
	<MyMount/>,
	document.getElementById('container')
);