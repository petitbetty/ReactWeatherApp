var React = require('react');



var WeatherMessage = ({temp, location}) => {
	return (
		<h3>It is {Math.round((temp - 32) * 5/9 )} degree celsius in {location}.</h3>
	);
};

module.exports = WeatherMessage;