const httpStatus = require("http-status");
const Movie = require("../models/movie.model");

exports.create = async (req, res, next) => {
  try {
    const movieData = req.body;

    const movie = new Movie(movieData);
    await movie.save();

    return res.status(httpStatus.CREATED).json({ movie });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndRemove(id);
    if (!deletedMovie) {
      throw Error("Movie not found");
    }

    return res.status(httpStatus.OK).send();
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const update = req.body;

    const movie = await Movie.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    );
    if (!movie) {
      throw Error("Movie not found");
    }

    return res.status(httpStatus.OK).json({ movie });
  } catch (error) {
    next(error);
  }
};

exports.view = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id).select("-__v");
    if (!movie) {
      throw Error("Movie not found");
    }

    return res.status(httpStatus.OK).json({ movie });
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const { sortBy = "releaseDate", order = "desc", tag = null } = req.query;

    const query = Movie.find({})
      .sort({ [sortBy]: order })
      .select("-description -__v");

    if (tag) {
      query.where("tag", tag);
    }

    const movies = await query.exec();

    return res.status(httpStatus.OK).json({ movies });
  } catch (error) {
    next(error);
  }
};
