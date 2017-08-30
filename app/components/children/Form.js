'use strict'
// =======================
//            REACT
// =======================
let React = require("react");

// =======================
//           FORM COMPONENT
// =======================
let Form = React.createClass({

  getInitialState: function() {
    return {term: "", startYear: "", endYear: ""};
  },
  // handleChange: function(event) {

  //   this.setState({term: event.target.value , startYear: event.target.value, endYear: event.target.value});

  // },
  handleSubmit: function(event) {

    event.preventDefault();

    this.props.setTerm(this.state.term);
    this.props.setSyear(this.state.startYear);
    this.props.setEyear(this.state.endYear);


    this.setState({term: "", startYear: "", endYear: ""});


  },
  render: function() {
    return (

                <div className="col l12">
                  <h5>SEARCH CITY</h5>
                 <form onSubmit={this.handleSubmit}>
                      <div className="row">

                        {/*
                                Note how each of the form elements has an id that matches the state.
                                This is not necessary but it is convenient.
                                Also note how each has an onChange event associated with our handleChange event.
                        */}

                        <div className="input-field col l12">
                          <input  type="text" className="input-field validate" id="term" onChange={this.handleChange} required/>
                          <label>TOPIC:
                          </label>
                        </div>

                        <div className="input-field col l6">
                          <input value={this.props.sYear} type="text" className="input-field col l12 validate" id="startYear" onChange={(e) => {this.props.setSyear(e.currentTarget.value)}} required/>
                          <label>START YEAR:
                          </label>
                        </div>

                        <div className="input-field col l6">
                          <input value={this.props.eYear} type="text" className="input-field  col l12 validate" id="endYear" onChange={(e) => { this.props.setEyear(e.currentTarget.value)}} required/>
                          <label>END YEAR:
                          </label>
                        </div>

                        <br/>

                         {/* <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>  */}
                      </div>
                </form>
                </div>
              );
                     }
});

module.exports = Form;
