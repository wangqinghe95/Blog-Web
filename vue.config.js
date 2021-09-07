module.exports = {
  devServer: {
    port: 8800,
		open: true,
		host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'localhost:8801',
        target: 'http://192.168.163.129:8888',
        // target: 'http://172.30.213.163:8080/dms-server/2.0',
				
        // ws: true,
        changeOrigin: true,
				// onProxyReq: function(proxyReq, req, res, oprions) {
				// 	if (req.body) {
				// 		let bodyData = JSON.stringify(req.body)
				// 		proxyReq.setHeader('Content-Type', 'application/json');
				// 		proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
				// 		proxyReq.write(bodyData)
				// 	}
				// },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}