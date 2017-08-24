// ==================================
//            IMPORTS
// ==================================
import React, {Component} from "react";
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
    return {searchTerm: "", startYear: "", endYear: "", results: "", article: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    axios.getArticle().then(function(response) {
        console.log(response);
      if (response !== this.state.article) {
        console.log("Article", response.data);
        this.setState({article: response.data});
      }
    }.bind(this));
  },


  componentDidUpdate: function() {
    axios.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        console.log("Searched", data);
        this.setState({results: data});

        // DOES THIS NEED TO SAVE THE WORDS USED IN THE SEARCH OR RESULT OBJECTS ie: TITLE, DATE, URL????

        axios.postArticle(this.state.searchTerm).then(function() {
              console.log("UPDATED!");
              axios.getArticle().then(function(response) {
                console.log("Current Article", response.data);

                console.log("Article", response.data);

                this.setState({article: response.data});

              }.bind(this));
        }.bind(this));
      } //end if
    }.bind(this)); //end axios
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({searchTerm: term});
  },
  setSyear:function(startYear) {
    this.setState({ startYear: startYear });
  },
  setEyear: function (endYear) {
    this.setState({ endYear: endYear });
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <div className="col l12">

            <Form setTerm={this.setTerm} setSyear = {this.setSyear} setEyear = {this.setEyear}/>

          </div>

          <div className="col l12">

            <Search address={this.state.results}/>

          </div>

        </div>

        <div className="row">

          <div className="col l12">

            <Saved article={this.state.article}/>

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Main;
