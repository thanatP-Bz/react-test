import diarySchema from "../model/diaryModel.js";

const getPost = async (req, res) => {
  const diary = await diarySchema.find({});
  try {
    res.status(200).json(diary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const diary = await diarySchema.create(req.body);
  try {
    res.status(201).json(diary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getPost, createPost };
