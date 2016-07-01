var React = require('react');
var sermons = require('../configs/sermonsContent.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="sermons">
        <div className="row">
        {
          sermons.map((sermon)=>{
            return (
               <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/roundicons.png" className="img-responsive" alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>{sermon.title}</h4>
                        <p className="text-muted">{sermon.speaker}</p>
                    </div>
                </div>
            );
          })
        }        
        </div>
      </div>
    ); 
  }
});
