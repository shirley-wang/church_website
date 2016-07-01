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
               <div className="col-md-6 col-sm-12 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                    </a>
                    <iframe 
                    src={sermon.videoLink}
                    frameborder="0" 
                    allowfullscreen>
                    </iframe>
                    <div className="portfolio-caption">
                      <h4>{sermon.title}</h4>
                      <p className="text-muted">{sermon.speaker}</p>
                    </div>
                    <audio controls>
                      <source src={sermon.audioLink} type="audio/mpeg"/>
                      Your browser does not support the audio element.
                    </audio>
                </div>
            );
          })
        }        
        </div>
      </div>
    ); 
  }
});
