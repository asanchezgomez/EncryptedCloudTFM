// The controller contains the logic of the program

// GET /quizes/question
// exports is used to make visible this function from router index.js
exports.question = function(req,res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
