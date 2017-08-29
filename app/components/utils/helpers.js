'use strict'

// ==================================
//            AXIOS REQ'D
// ==================================
let axios = require("axios");


// ==================================
//            NYT  API SEARCH ARTICLES
// ==================================
let helper = {
  runQuery: function(qTerm, sYear, eYear) {
    console.log("Query Run");
    var qTerm = qTerm.trim();
    var sYear = sYear.trim();
    var eYear = eYear.trim();

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "997b4e44a445477bbf130c731961f844",
        "q": qTerm,
        "begin_date": sYear + "0101",
        "end_date": eYear + "0101"
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response.docs);
      return results.data.response.docs[0];
    });
  },

  getArticle: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        // console.log("axios results: ", results);
        return results;
      });
  },
  postArticle: function(title,date,url) {
    return axios.post("/api/saved")
      .then(function(results){
        return results.snippet
      });
  }
};

module.exports = helper;
