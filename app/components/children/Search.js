// ===============
//          REACT
// ===============
let React = require("react");

// ======================
//      RESULTS COMPONENT
// ======================
let Results = React.createClass({
        render: function( )
                        {
                            return
                             (
                                     <div className="card blue-grey darken-1">
                                            <div className="card-content white-text">
                                                      <span className="card-title">Results</span>
                                                        <h2>{this.props.title}</h2>
                                                        <p>{this.props.date}</p>
                                                        <button
                                                            className="btn waves-effect waves-light"
                                                            name="save"
                                                        >
                                                                            SAVE
                                                        </button>
                                            </div>
                                        </div>
                             );//end return
                        }//end render

});// end results
          
module.exports = Results;
