import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

class App {

    // holds a ref to the express instance
    public express: express.Application;

    // run configuration methods on the express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // configure the middleware for express
    private middleware() : void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // configure the api endpoints
    private routes() : void {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}

export default new App().express;
