var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<hr />    
				<div className="row">
						<div className="col-lg-12">
							<div className="span8">
								<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/709+Lakewood+Dr,+Sunnyvale,+CA+94089/@37.3952216,-122.0077034,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb631ed62504d:0xc6307ea5bfc90997!8m2!3d37.3952174!4d-122.0055147"></iframe>
							</div>
							<div className="col-md-3">
								<h5>CONNECT WITH US</h5>
								<ul className="nav nav-pills nav-stacked">
									<p>709 Lakewood Drive</p>
									<p>Sunnyvale, CA</p>
									<p>94089</p>
									<p>By Phone</p>
									<p>(408) 734-2297</p>
								</ul>
							</div>
							<div className="col-md-3">
								<h5>WELCOME</h5>
								<ul className="nav nav-pills nav-stacked">
									<li><a href="#">Core Beliefs</a></li>
									<li><a href="#">Our Ministries</a></li>
									<li><a href="#">Rides to Church</a></li>
								</ul>
							</div>
							<div className="col-md-3">
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