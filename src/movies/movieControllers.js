const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.findOne({});
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateMovies = async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: req.body.title });
    await Movie.updateOne(
      { title: movie.title },
      {
        title: req.body.newTitle || movie.title,
        actors: req.body.actors || movie.actors,
      }
    );

    res.status(200).send({ message: "Movie Updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.deleteOne({ title: req.body.title });
    res.status(200).send({ msg: "Movie Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
