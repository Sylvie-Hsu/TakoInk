const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/fnc", {
      target: "http://www.tako.ink:8080",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/auth", {
      target: "http://www.tako.ink:8080",
      changeOrigin: true
    })
  );
};
