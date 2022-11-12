const { Router } = require('express')
const { MovieTagsController } = require('../controllers/MovieTagsController')

const movieTagsRouter = Router();
const movieTagsController = new MovieTagsController();

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

movieTagsRouter.get('/', ensureAuthenticated, movieTagsController.index)

module.exports = { movieTagsRouter }