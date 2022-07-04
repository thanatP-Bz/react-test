import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("get item");
});

//get single workout
router.get("/:id", (req, res) => {
  res.send("get workout");
});

export default router;
