var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">    
				<div className="row-fluid">
						<div>
							<div>
								<ul>
									<p>Providence Bible Church</p>
									<li><a href="#">About us</a></li>
									<li><a href="#">Contact us</a></li>
									<li><a href="#">Rides to Church</a></li>
								</ul>
							</div>					
						</div>
				</div>
				
				<div className="row-fluid">		
					<div>	
						<div>
							<p className="muted pull-right">© 2016 Providence Bible Church. All rights reserved</p>
						</div>	
					</div>
				</div>
			</div>
			);
	}
});