require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

app.use(cors({ origin: "https://m33-back-end.herokuapp.com/" }));

app.use(userRouter, movieRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
