const request = require('request');

module.exports = function(app, db) {
    app.get('/tv/search', (req, res) => {

        let options = {
            uri: 'https://api.themoviedb.org/3/search/tv',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            qs: {
                api_key: process.env.MOVIEDB_API_KEY,
                query: req.query.query
            }
        }

        request(options, function(error, response, body) {
            if(!error) {
                res.json(body);
            } else {
                console.log(error);
            res.send({
                status: 'Internal Server Error',
                statusCode: 500,
                message: 'Unknown error. Please try again.'
            });
            }
       });
      });

      app.get('/tv/episodes', (req, res) => {

        let tvOptions = {
            uri: `https://api.themoviedb.org/3/tv/${req.query.id}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            qs: {
                api_key: process.env.MOVIEDB_API_KEY,
            }
        }

        request(options, function(error, response, body) {
            if(!error) {

                let episodeOptions = {
                    uri: `https://api.themoviedb.org/3/tv/${req.query.id}/season/${season_number}`,
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    qs: {
                        api_key: process.env.MOVIEDB_API_KEY,
                    }
                }
                res.json(body);
            } else {
                console.log(error);
            res.send({
                status: 'Internal Server Error',
                statusCode: 500,
                message: 'Unknown error. Please try again.'
            });
            }
       });
      });
};