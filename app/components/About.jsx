var React = require('react');

var About =(props) => {
	return (
		<div className="text-center">
			<h1>About</h1>
			<p>This is the weather application build on React and foundation</p>
			<p>
				Here are some of the tools I used:
			</p>

			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather map to search for weather data by city name.
				</li>
			</ul>
		</div>
		
	);
}

module.exports = About;