class AnswerRouter {
  constructor(answerController, express) {
    this.answerController = answerController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/questionnaire/:testid/:id/answers", this.answerController.getAllAnswers);
    router.get("/questionnaire/:testid/:id/", this.answerController.getOneAnswer);
    router.post("/questionnaire/:testid/:id", this.answerController.insertOneAnswer);
    router.put("/questionnaire/:testid/:id/answers/:id", this.answerController.editOneAnswer);
    router.delete("/questionnaire/:testid/:id/answers/:id", this.answerController.deleteOneAnswer);

    return router;
  };
}

module.exports = AnswerRouter;
