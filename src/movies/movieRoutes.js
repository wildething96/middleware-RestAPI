const { Router } = require("express");
const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovie,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie", updateMovies);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter;
