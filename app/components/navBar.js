var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">           
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">Providence Baptist Church</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                  <a href="#page-top"></a>
              </li>
              <li>
                  <a className="page-scroll" href="#services">Home</a>
              </li>
              <li>
                  <a className="page-scroll" href="#portfolio">Core Beliefs</a>
              </li>
              <li>
                  <a className="page-scroll" href="#about">Our Ministries</a>
              </li>
              <li>
                  <a className="page-scroll" href="#team">Our Objectives As We Meet</a>
              </li>
              <li>
                  <a className="page-scroll" href="#contact">Rides to Church</a>
              </li>
              <li>
                  <a className="page-scroll" href="#contact">Sermons</a>
              </li>
            </ul>
          </div>          
        </div>
      </nav>
    ); 
  }
});

