import Sections from '../models/sections';
import Subjects from '../models/subjects';
import Post from '../models/posts';
import mongoose from 'mongoose';

const getSections = async (req, res, next) => {
  Sections.find({}).limit(100).sort({ name: 1 }).select({
    name: 1
  }).exec((err, items) => {
    if (!err) {
      res.json({
        status: true,
        data: items,
        count: items.length,
        messages: 'Get data Success !'
      })
    } else {
      res.json({
        status: false,
        data: [],
        messages: 'fetch data error !'
      })
    }
  })
};

const getFindById = async (req, res, next) => {
  Sections.findById(require('mongoose').Types.ObjectId(req.query.sections_id), (err, items) => {
    if (!err) {
      res.json({
        status: true,
        data: items,
        message: 'Thành công !'
      })
    } else {
      res.json({
        status: false,
        data: {},
        message: `Thất bại, lỗi là: ${err}`
      })
    }
  })
}

const insertItemSections = async (req, res, next) => {
  const newData = new Sections({
    _id: new mongoose.mongo.ObjectId(),
    name: req.body.name,
  })
  newData.save((err, items) => {
    if (err) return console.log(err);
    Subjects.findOne({ _id: req.body._id })
      .exec((err, docs) => {
        if (err) return console.log(err)
        docs.sections = [...docs.sections, newData._id];
        docs.save((err) => {
          if (!err) {
            res.json({
              status: true,
              data: items,
              count: items.length,
              messages: 'insert data success !'
            })
          } else {
            res.json({
              status: false,
              data: [],
              messages: 'get data success !'
            })
          }
        })
      })
  });
}

const updateItemSections = async (req, res, next) => {
  const conditions = {};
  if (mongoose.Types.ObjectId.isValid(req.body._id) === true) {
    conditions._id = mongoose.Types.ObjectId(req.body._id);
  } else {
    res.json({
      status: false,
      data: {},
      messages: 'Bạn phải nhập _id để cập nhật !'
    })
    return;
  }
  const newValues = {};
  if (req.body.name && req.body.name.length > 0) {
    newValues.name = req.body.name;
    const options = {
      new: true
    }
    Sections.findOneAndUpdate(conditions, { $set: newValues }, options, (err, updateItems) => {
      if (!err) {
        res.json({
          status: true,
          data: updateItems,
          messages: 'Cập nhật thành công !'
        })
      }
    })
  } else {
    const result = {
      status: false,
      data: {},
      message: {}
    }
    req.body.name.length < 1 ? result.message.name = 'Tên không được để trống' : null,
      res.json(result)
  }
}

const deleteItems = async (req, res) => {
  try {
    const result = await Sections.findOneAndRemove({
      _id: req.body.section_id
    });
    if (result) {
      await Subjects.update(
        { _id: req.body.subjects_id },
        { $pull: { sections: result._id } },
        { safe: true }
      );
      const deletePost = await result.posts.map(async (e) => {
        await Post.findOneAndRemove({
          _id: e
        })
        return e;
      })
      const data = {
        status: true,
        data: result,
        test: deletePost,
        messages: 'Xóa thành công !'
      }
      return res.status(200).json(data)
    } else {
      const err = {
        status: false,
        message: 'Xóa Thất bại !'
      }
      res.status(404).json(err)
    }
  } catch (e) {
    const data = {
      status: false,
      data: [],
    }
    if (err.status === 404) {
      data.messages = err.messages;
      return res.status(404).json(data);
    }
    if (!err.name) {
      data.messages = 'Không tìm thấy id';
      return res.status(404).json(data);
    }
    data.messages = "Lỗi máy chủ"
  }
}

export {
  getSections,
  insertItemSections,
  updateItemSections,
  deleteItems,
  getFindById
}