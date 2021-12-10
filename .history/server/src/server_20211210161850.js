import express from "express";
import cors from "express";
import routes from "./routes";
import bodyParser from "body-parser";

export function launch(port) {

  const application = express();
  var cors = require('cors')

  application.use(cors());
  application.use(express.json());
  application.use(express.urlencoded({ extended: false }));
  application.use(bodyParser.json());

  application.use("/", routes);
  application.disable("x-powered-by");
  application.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })
  application.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });

  application.use((req, resp, next) => {
    console.log("Middleware just ran here!", req)
    next();
  });

  application.get('*', function (req, res, next) {
    res.status(404).send('404 : Not Found');
    next();
  });

  application.use((err, req, resp, next) => {
    console.error(err);
    resp.status(500).send('Something broke!');
    next();
  });

  application.listen(port, '0.0.0.0', () => {
    console.log(`Server started and listen on port ${port}`)
  });
}
