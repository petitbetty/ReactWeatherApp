var React = require('react');



var WeatherMessage = ({temp, location}) => {
	return (
		<h3 className="text-center">It is {Math.round((temp - 32) * 5/9 )} celsius in {location}.</h3>
	);
};

module.exports = WeatherMessage;