const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/TodoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);

module.exports = router;
