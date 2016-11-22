var React = require('react');



var WeatherMessage = ({temp, location}) => {
	return (
		<h3 className="text-center page-title">It is {temp} celsius in {location}.</h3>
	);
};

module.exports = WeatherMessage;