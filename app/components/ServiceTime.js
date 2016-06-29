var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Wednesday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>9:30 a.m. Sunday School for all ages</p>
            <p>11:00 a.m. Worship Service</p></td>
            <td><p>7:00 p.m. Prayer Meeting</p></td>
          </tr>
        </tbody>
      </table>
    ); 
  }
});