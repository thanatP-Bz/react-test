import Post from "../model/postModel.js";

const getPost = async (req, res) => {
  try {
    const content = await Post.find({});
    res.status(200).json(content);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
  const { post } = req.body;
  try {
    const content = await Post.create({ post });
    res.status(201).json(content);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  const { post } = req.body;
  const { id } = req.params;

  try {
    const content = await Post.findByIdAndUpdate(
      { _id: id },
      { post: post },
      { new: true }
    );
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const content = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export { getPost, createPost, updatePost, deletePost };
