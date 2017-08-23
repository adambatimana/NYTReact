// ==================================
//            IMPORTS
// ==================================
import React, { Component } from "react";
import Form from "./children/Form";
import Search from "./children/Search";
import Saved from "./children/Saved";

// ==================================
//            AXIOS for API
// ==================================
let axios = require("./utils/helpers");

// ==================================
//            MAIN REACT
// ==================================

var Main = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", results: "", saved: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
      axios.getArticle().then(function(response){
            if (response !== this.state.article) {
                console.log("Article", response.data);
                this.setState({ article : response.data});
            }
      }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
      axios.runQuery(this.state.searchTerm).then(function(data){
            if(data !== this.state.results){
                console.log("Searched", data);
                this.setState({ results : data});


                axios.postArticle(this.state.searchTerm).then(function(){
                    console.log("UPDATED!");
                        axios.getArticle().then(function(response){
                                  console.log("Current Article", response.data);

                                  console.log("Article", response.data);

                                  this.setState({ article : response.data});

                        }.bind(this));
                  }.bind(this));
            }//end if
          }.bind(this));//end axios
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term, start: sYear , end :eYear});
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <div className="col s12">

              <Form setTerm={this.setTerm} />

          </div>


          <div className="col s12">

              <Search address={this.state.results} />

          </div>

        </div>

        <div className="row">

          <div className = "col s12">

            <Saved article={this.state.article} />

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Main;
