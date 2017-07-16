import 'babel-register';
import express from 'express';

const app = express();
const port = process.env.PORT || 4000;
const serverRender = require('./src/serverRender');

require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
});

app.set('view engine', 'ejs');

// initalize webpack dev middleware if in development context
if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
	const config = require('./webpack.config');

	const devMiddleware = require('webpack-dev-middleware');
	const hotDevMiddleware = require('webpack-hot-middleware');
	const compiler = webpack(config);
	const devMiddlewareConfig = {
        noInfo: true,
        stats: {
            colors: true,
        },
        publicPath: config.output.publicPath,
    };

    app.use(devMiddleware(compiler, devMiddlewareConfig));
    app.use(hotDevMiddleware(compiler));
}

app.use(express.static('public'));

app.get('*', serverRender);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
