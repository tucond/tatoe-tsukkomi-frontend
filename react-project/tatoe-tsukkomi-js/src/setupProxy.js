const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {

  const headers  = {
    "Content-Type": "application/json",
  }
    app.use(createProxyMiddleware("/tsukkomi", { target: process.env.REACT_APP_BACKEND_URL, changeOrigin: true,headers: headers,}));  
};