var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/location=Wedel'>Wedel, Germany</Link>
				</li>
				<li>
					<Link to='/location=Paris'>Paris, France</Link>
				</li>
				<li>
					<Link to='/location=Berlin'>Berlin, Germany</Link>
				</li>
				<li>
					<Link to='/location=Lagos'>Lagos, Nigeria</Link>
				</li>
			</ol>
		</div>
		
	);
};

module.exports = Examples;