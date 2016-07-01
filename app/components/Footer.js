var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<hr />    
				<div className="row">
						<div className="col-lg-12">
							<div className="col-md-5">
								<iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.7720961242494!2d-122.00770338433749!3d37.39522164167771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb631ed62504d%3A0xc6307ea5bfc90997!2s709+Lakewood+Dr%2C+Sunnyvale%2C+CA+94089!5e0!3m2!1sen!2sus!4v1467349579891"></iframe>							
							</div>
							<div className="col-md-2">
								<h5>CONNECT WITH US</h5>
								<ul className="nav nav-pills nav-stacked">
									<p>709 Lakewood Drive</p>
									<p>Sunnyvale, CA</p>
									<p>94089</p>
									<p>By Phone</p>
									<p>(408) 734-2297</p>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>WELCOME</h5>
								<ul className="nav nav-pills nav-stacked">
									<li><a href="#">Core Beliefs</a></li>
									<li><a href="#">Our Ministries</a></li>
									<li><a href="#">Rides to Church</a></li>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>RESOURCES</h5>
								<ul className="nav nav-pills nav-stacked">
									<li><a href="#">Sermons</a></li>
								</ul>
							</div>	
						</div>
				</div>
				<hr />
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