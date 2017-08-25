// ==================================
//            AXIOS REQ'D
// ==================================
let axios = require("axios");

// ==================================
//            NYT API KEY / URL
// ==================================
let APIkey = "997b4e44a445477bbf130c731961f844";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey;

// ==================================
//            NYT  API SEARCH ARTICLES
// ==================================
let helper = {
  runQuery: function(qTerm, sYear, eYear) {
    console.log(location);
    let queryURL = url + "&q=" + qTerm + "&begin_date=" + sYear + "&end_date=" + eYear;
    return axios.get(queryURL).then(function(response) {
        console.log(response)
      // if (response.data.results[0]) {
      //
      //   return response.data.results[0].formatted;
      //
      // }
      // return "";

    });
  },
  getArticle: function() {
    return axios.get("/api/saved");
  },
  postArticle: function(title, date, url) {
    return axios.post("/api/saved", {
      title: title,
      date: date,
      url: url
    });
  }
};

module.exports = helper;
