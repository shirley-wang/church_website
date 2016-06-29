var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://www.pbc-ca.org/wp-content/uploads/2010/08/PastorsDesk.jpg" alt=""/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">From the pastor's desk:</h4>
            <p>On behalf of our church family, I would like to extend a heartfelt thank you for visiting us. Our prayer is that you feel at home as we worship God together.</p>
        </div>
      </div>
    ); 
  }
});

