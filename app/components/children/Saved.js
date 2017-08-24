// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var History = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className = "card">
          <div className = "card-content">
                <div className = "card-title"> Saved Articles </div>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.article.map(function(search, i) {
            return (
              <p key={i}>{search.title} - {search.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
