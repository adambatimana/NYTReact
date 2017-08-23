// ==================================
//            AXIOS REQ'D
// ==================================
let axios = require("axios");

// ==================================
//            NYT API KEY / URL
// ==================================
let APIkey= "35e5548c618555b1a43eb4759d26b260";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// ==================================
//            NYT  API SEARCH ARTICLES
 // ==================================
let helper =
    {
                runQuery:function(location )
                                    {
                                        console.log (location);
                                                        let queryURL = url += '?' + $.param({'api-key': APIkey});
                                                        return axios.get(queryURL).then(function(response) {
                                
                                                            if (response.data.results[0]) {
                                                                return response.data.results[0].formatted;
                                                            }
                                                                return "";
                                                                });
                                    },
                getArticle: function()
                                    {
                                          return axios.get("/api")  ;
                                    },
                postArticle: function(title, date, url)
                                    {
                                            return axios.post("/api", { 
                                                            title: title,
                                                            date: date,
                                                            url:url
                                            });
                                    }
    };

    module.exports = helper;









    }