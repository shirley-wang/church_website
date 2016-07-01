var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<hr />    
				<div className="row">
						<div className="col-lg-12">
							<div className="col-md-3">
								<ul className="nav nav-pills nav-stacked">
									<h5>CONNECT WITH US</h5>
									<p>709 Lakewood Drive</p>
									<p>Sunnyvale, CA</p>
									<p>94089</p>
									<p>By Phone</p>
									<p>(408) 734-2297</p>
								</ul>
							</div>
							<div className="col-md-3">
								<ul className="nav nav-pills nav-stacked">
									<h5>WELCOME</h5>
									<li><a href="#">Core Beliefs</a></li>
									<li><a href="#">Our Ministries</a></li>
									<li><a href="#">Rides to Church</a></li>
								</ul>
							</div>
							<div className="col-md-3">
								<ul className="nav nav-pills nav-stacked">
									<h5>RESOURCES</h5>
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