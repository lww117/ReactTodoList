var Weather = React.createClass({
	getInitialState: function() {
		return {
			retData: ''
		};
	},

	componentDidMount: function() {
		this.serverRequest = requests.get(this.props.source, this.props.headers, function(result) {
			this.setState({
				retData: result
			});
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				{this.state.retData}天气
			</div>
		);
	}
});
ReactDOM.render(
	<Weather source="http://apis.baidu.com/apistore/weatherservice/recentweathers?cityname=%E5%8C%97%E4%BA%AC&cityid=101010100" headers={{'apikey':'30100ae48a00ef8052a29ef3ad484296'}}/>,
	document.getElementById('example')
);