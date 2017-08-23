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
  handleChange: function(event) {

    this.setState({term: event.target.value});
    this.setSyear({startYear: event.target.value});
    this.setEyear({endYear: event.target.value})

  },
  handleSubmit: function(event) {

    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({term: ""});

    this.props.setSyear(this.state.startYear);
    this.setState({startYear: ""});

    this.props.setEyear(this.state.endYear);
    this.setEtate({endYear: ""});

  },
  render: function() {
    return (

                <div className="col l2">
                  <h3>SEARCH CITY</h3>
                 <form onSubmit={this.handleSubmit}>
                      <div className="row">

                        {/*
                                Note how each of the form elements has an id that matches the state.
                                This is not necessary but it is convenient.
                                Also note how each has an onChange event associated with our handleChange event.
                        */}

                        <div className="input-field col l12">
                          <input value={this.state.term} type="text" className="input-field col s6 validate" id="term" onChange={this.handleChange} required/>
                          <label >Topic:
                          </label>
                        </div>

                        <div className="input-field col l12">
                          <input value={this.state.eYear} type="text" className="input-field col s6 validate" id="startYear" onChange={this.handleChange} required/>
                          <label >START YEAR:
                          </label>
                        </div>

                        <div className="input-field col l12">
                          <input value={this.state.eYear} type="text" className="input-field col s6 validate" id="endYear" onChange={this.handleChange} required/>
                          <label >END YEAR:
                          </label>
                        </div>

                        <br/>

                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>

                      </div>
                </form>
                </div>
              );
                     }
});

module.exports = Form;
