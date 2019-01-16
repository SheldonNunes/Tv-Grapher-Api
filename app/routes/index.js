const tvRoutes = require('./tv_routes');

module.exports = function(app, db) {
  tvRoutes(app, db);
  // Other route groups could go here, in the future
};