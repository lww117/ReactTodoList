// 使用 React.createClass 创建一个组件
var DemoComponent = React.createClass({
	getInitialState: function () {
		return {
			title: '喜欢的电影',
			movies: [
				{
					id: 7,
					name: 'a',
					data: 2012
				},
				{
					id: 8,
					name: 'b',
					data: 2012
				}
			]
		}
	},
	// 使用 render 方法自动渲染 DOM
	render: function () {
		var title = this.state.title;
		var movies = this.state.movies.map(function (movie) {
			return (
				<li className="movie-item" key={movie.id}>
					<span className="movie-name">{movie.name}</span>
					<span>-</span>
					<span className="movie-date">{movie.data}</span>
				</li>
			)
		});
		return (
			<div className="component-hello">
				<h1 className="hello-title">Hello React</h1>
				<p className="hello-desc">React</p>
				<div className="hello-movies">
					<p>{title}</p>
					<ul>{movies}</ul>
				</div>
			</div>
		)
	}
});

// 将组件插入到网页中指定的位置
React.render(<DemoComponent />, document.getElementById('demo2'));