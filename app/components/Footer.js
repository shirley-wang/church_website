var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
/*			<div className="container">    
			<div className="row-fluid">
					<div className="span12">
						<div className="span2">
							<ul className="unstyled">
								<li>GitHub<li>
								<li><a href="#">About us</a></li>
								<li><a href="#">Contact us</a></li>
								<li><a href="#">Rides to Church</a></li>
							</ul>
						</div>					
					</div>
			</div>
			</div>*/
			<div className="container">
					<div className="row-fluid">		
						<div class="span12">	
						<div className="span8">
							<a href="#">Terms of Service</a>    
							<a href="#">Privacy</a>    
							<a href="#">Security</a>
						</div>
						<div className="span4">
							<p className="muted pull-right">© 2016 Providence Bible Church. All rights reserved</p>
						</div>	
						</div>
					</div>
			</div>
			);
	}
});