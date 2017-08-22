// =======================
//            REACT
// =======================
let React = require("react");

// =======================
//           FORM COMPONENT
// =======================
let Form = React.createClass({

            getInitialState: function()
                    {
                                return { term: "" };
                    },
            handleChange: function(event) 
                    {

                                    this.setState({ term: event.target.value });

                    },
            handleSubmit: function(event) 
                    {
    
                                     event.preventDefault();

                                    // Set the parent to have the search term
                                    this.props.setTerm(this.state.term);
                                    this.setState({ term: "" });
                    },
            render: function() {
                                    return (
                                                               
                                                                    <div className="col l12">
                                                                    <h3>SEARCH CITY</h3>
                                                                    </div>
                                                                 
                                                                    <form onSubmit={this.handleSubmit}>
                                                                        <div className="row">
                                                                        

                                                                        {/*
                                                                            Note how each of the form elements has an id that matches the state.
                                                                            This is not necessary but it is convenient.
                                                                            Also note how each has an onChange event associated with our handleChange event.
                                                                        */}

                                                                         <div class="input-field col s6">
                                                                                    <input
                                                                                        value={this.state.term}
                                                                                        type="text"
                                                                                        className="input-field col s6 validate"
                                                                                        id="term"
                                                                                        onChange={this.handleChange}
                                                                                        required
                                                                                    />
                                                                                    <label for="term">LOCATION: </label>
                                                                        </div>
                                                                        
                                                                        <br />
                                                                        <button
                                                                            className="btn waves-effect waves-light"
                                                                            type="submit"
                                                                            name="action"
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                        </div>
                                                                    </form>
                                                                 
                                                               
                                                                );
                     }
});

module.exports = Form;

