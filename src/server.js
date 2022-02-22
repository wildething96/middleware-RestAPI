require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRoutes");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter, movieRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
