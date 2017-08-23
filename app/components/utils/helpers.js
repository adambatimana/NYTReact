// ==================================
//            AXIOS REQ'D
// ==================================
let axios = require("axios");

// ==================================
//            NYT API KEY / URL
// ==================================
let APIkey = "35e5548c618555b1a43eb4759d26b260";
let url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

// ==================================
//            NYT  API SEARCH ARTICLES
// ==================================
let helper = {
  runQuery: function(qTerm, sYear, eYear) {
    console.log(location);
    let queryURL = url + "&q=" + qTerm + "&begin_date=" + sYear + "&end_date=" + eYear;
    return axios.get(queryURL).then(function(response) {

      if (response.data.results[0]) {

        return response.data.results[0].formatted;

      }
      return "";

    });
  },
  getArticle: function() {
    return axios.get("/api");
  },
  postArticle: function(title, date, url) {
    return axios.post("/api", {
      title: title,
      date: date,
      url: url
    });
  }
};

module.exports = helper;
