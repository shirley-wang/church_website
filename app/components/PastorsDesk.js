var React = require('react');
var Contents = require('../configs/contents.js');

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
            <p>{Contents.from_the_pastors_desk}</p>
        </div>
      </div>
    ); 
  }
});

