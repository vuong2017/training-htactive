import Subjects from "../models/subjects";
import Sections from "../models/sections";
import Posts from "../models/posts";
import mongoose from "mongoose";

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
      throw { status: 404, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.status === 404) {
      data.messages = error.messages;
      return res.status(404).json(data);
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    data.messages = "Internal Server Error";
    return res.status(500).json(data);
  }
};

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
        throw { status: 404, messages: "Không tìm thấy dữ liệu" };
      const data = {
        status: true,
        content: result,
        messages: "Lấy Dữ Liệu Thành Công"
      };
      return res.status(200).json(data);
    } else {
      throw { status: 404, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.status === 404) {
      data.messages = error.messages;
      return res.status(404).json(data);
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    data.messages = "Internal Server Error";
    return res.status(500).json(data);
  }
};

const deletePosts = async (req, res) => {
  try {
    const result = await Posts.findOneAndRemove({
      _id: req.params.idPosts
    });
    if (result) {
      await Sections.update( 
        { _id: "5bea79a387619c21c4483a46" },
        { $pull: { posts : result._id } },
        { safe: true });
      const data = {
        status: true,
        content: result,
        messages: "Xóa Thành Công"
      };
      return res.status(200).json(data);
    } else {
      throw { status: 404, messages: "Không tìm thấy dữ liệu" };
    }
  } catch (error) {
    const data = {
      status: false
    };
    if (error.status === 404) {
      data.messages = error.messages;
      return res.status(404).json(data);
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id";
      return res.status(404).json(data);
    }
    data.messages = "Internal Server Error";
    return res.status(500).json(error);
  }
};

export { getPosts, getPostsId, deletePosts };
