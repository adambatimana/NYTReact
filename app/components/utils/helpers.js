
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
    console.log(qTerm);
    console.log(sYear);
    console.log(eYear)
    var qTerm = qTerm.trim();
    var sYear = sYear.trim();
    var eYear = eYear.trim();

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        "q": qTerm,
        "begin_date": sYear + "0101",
        "end_date": eYear + "0101"
      }

    })
    .then(function(results) {
      console.log("Axios Results", results.data.response.docs[0]);
      return results.data.response.docs[0];
    });
  },

  getArticle: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        return results;
      });
  },
  postArticle: function() {
    return axios.post("/api/saved")
      .then(function(results){
        return results;
      });
  }
};

module.exports = helper;
