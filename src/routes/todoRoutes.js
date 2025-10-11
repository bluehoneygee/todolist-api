const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { protect, authorize } = require("../middleware/auth");

router.use(protect);

router.get("/stats", todoController.getTodoStats);

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getTodoById)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

router.patch("/:id/toggle", todoController.toggleTodoCompletion);

module.exports = router;
