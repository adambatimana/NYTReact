// Include React
let React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
let Article = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className = "card indigo lighten-5">
          <div className = "card-content">
                <div className = "card-title"> Saved Articles </div>
      
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.article.map(function(search, i) {
            return (
              <p key={i}>{search.title} - {search.date}</p>
            );
          })}

           <button className="btn waves-effect waves-light" name="delete">
            DELETE
          </button>
         </div>
      </div>
    );
  }
});
module.exports = Article;


