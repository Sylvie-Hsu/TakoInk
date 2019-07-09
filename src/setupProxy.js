const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://47.98.250.14:8080",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/auth", {
      target: "http://47.98.250.14:8080",
      changeOrigin: true
    })
  );
};
