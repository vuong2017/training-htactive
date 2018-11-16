import Subjects from "../models/subjects";
import Sections from "../models/sections";
import Posts from "../models/posts";
import mongoose from "mongoose";

// Get Data Join 2 Collections Sections to Posts
const getPosts = async (req, res) => {
  try {
    const result = await Sections.findOne({
      _id: req.params.idSections
    }).populate([{ path: "posts" }]);
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: "Lấy Dữ Liệu Thành Công"
      };
      return res.status(200).json(data);
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error";
      return res.status(500).json(data);
    }
    return res.status(401).json(error);
  }
};

// Get Data Join 3 Collections Subject,Sections,Posts Check Post Attribute Sections Current
const getPostsId = async (req, res) => {
  try {
    const result = await Posts.findOne({ _id: req.params.idPosts });
    const resultSubjects = await Subjects.findOne({
      _id: req.params.idSubjects
    }).populate([{ path: "sections", populate: { path: "posts" } }]);
    if (result) {
      const checkId = resultSubjects.sections.map(e =>
        e.posts.some(elem => String(elem._id) === req.params.idPosts)
      );
      if (!checkId.some(e => e === true))
        throw { status: false, messages: "Không tìm thấy dữ liệu" };
      const data = {
        status: true,
        content: result,
        messages: "Lấy Dữ Liệu Thành Công"
      };
      return res.status(200).json(data);
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error";
      return res.status(500).json(data);
    }
    return res.status(401).json(error);
  }
};

// Insert Posts And Update Id Posts To Sections Current
const insertPosts = async (req, res) => {
  try {
    const findUpdateSections = await Sections.findOne({
      _id: req.body.idSections
    });
    if (findUpdateSections) {
      const _id = new mongoose.mongo.ObjectId();
      findUpdateSections.posts = [...findUpdateSections.posts, _id];
      await findUpdateSections.save();
      const insertData = await new Posts({
        _id: _id,
        title: req.body.title,
        content: req.body.content
      });
      const result = await insertData.save();
      if (result) {
        const data = {
          status: true,
          content: result,
          messages: "Thêm Thành Công"
        };
        return res.status(200).json(data);
      }
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu Sections" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error";
      return res.status(500).json(data);
    }
    return res.status(401).json(error);
  }
};

// Update Posts
const updatePosts = async (req, res) => {
  try {
    const opts = { 
      new: true, 
      runValidators: true,
      context: 'query'
    };
    const result = await Posts.findOneAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      opts,
    );
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: "Cập Nhật Thành Công"
      };
      if (!req.body._id) throw { status: false, messages: "không tìm thấy trường id" };
      return res.status(200).json(data);
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu Posts" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error";
      return res.status(500).json(data);
    }
    return res.status(401).json(error);
  }
};

// Delete Posts And Update Id Posts To Sections Current
const deletePosts = async (req, res) => {
  try {
    const deletePostSections = await Sections.update(
      { _id: req.body.idSections },
      { $pull: { posts: req.body.idPosts } },
      { safe: true }
    );
    if (deletePostSections.n) {
      const result = await Posts.findOneAndRemove({
        _id: req.body.idPosts
      });
      if (result) {
        const data = {
          status: true,
          content: result,
          messages: "Xóa Thành Công"
        };
        return res.status(200).json(data);
      } else {
        throw { status: false, messages: "Không tìm thấy dữ liệu" };
      }
    }
    else {
      throw { status: false, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error";
      return res.status(500).json(data);
    }
    return res.status(401).json(error);
  }
};

export { getPosts, getPostsId, insertPosts, updatePosts, deletePosts };
