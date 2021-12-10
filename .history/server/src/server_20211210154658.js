import express from "express";
import cors from "express";
import routes from "./routes";
import bodyParser from "body-parser";

export function launch(port) {

  const application = express();

  application.use(cors());
  application.use(express.json());
  application.use(express.urlencoded({ extended: false }));
  application.use(bodyParser.json());

  application.use("/", routes);

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
