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
                                            </div>
                                            <div className="">
                                                        <h2>Address:</h2>
                                                        <p>{this.props.address}</p>
                                            </div>
                                        </div>
                             );//end return
                        }//end render

});// end results
          
module.exports = Results;
