var express = require('express');
var router = express.Router();

//Import of quizController
var quizController = require('../controllers/quiz_controller');


/* GET home page. */
//We show index view, and title atribute
//with value = Express when route is /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// When route is GET /quizes/question, we call quizController.question function
router.get('/quizes/question', quizController.question);

// When route is GET /quizes/answer, we call quizController.answer function
router.get('/quizes/answer', quizController.answer);

//Export this module for installing in app.js
module.exports = router;
