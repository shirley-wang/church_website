var React = require('react');
var ReactDOM = require('react-dom');
var ServiceTime = require('./components/serviceTime.js');
var PastorsDesk = require('./components/pastorsDesk.js');
var Footer = require('./components/Footer.js');
var App = React.createClass({
  render: function(){
    return (
      <div>
        <div className="jumbotron">
          <h1>This is the church website</h1>
        </div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Core Beliefs</a></li>
                <li><a href="#">Our Ministries</a></li>
                <li><a href="#">Our Objectives As We Meet</a></li>
                <li><a href="#">Rides to Church</a></li>
                <li><a href="#">Sermons</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <ServiceTime />
          <PastorsDesk />
        </div>
        <footer id="contact" className="row-footer">
          <Footer />
        </footer>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));