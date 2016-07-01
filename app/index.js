var React = require('react');
var ReactDOM = require('react-dom');
var ServiceTime = require('./components/serviceTime.js');
var PastorsDesk = require('./components/pastorsDesk.js');

var NavBar = require('./components/navBar.js');
var Sermons = require('./components/sermons.js');
var Footer = require('./components/Footer.js');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <div className="jumbotron">
          <h1>This is the church website</h1>
        </div>
        <NavBar />
        
        <div className="container">
          <ServiceTime />
          <PastorsDesk />
          <Sermons />
        </div>
        <footer id="contact" className="row-footer">
          <Footer />
        </footer>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));