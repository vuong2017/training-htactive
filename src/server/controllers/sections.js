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
              messages: 'get data success !'
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
  if (req.body.name && req.body.name.length > 2) {
    newValues.name = req.body.name;
  }
  const options = {
    new: true
  }
  // if (mongoose.Types.ObjectId.isValid(req.body._id)) {

  // }
  Sections.findOneAndUpdate(conditions, { $set: newValues }, options, (err, updateItems) => {
    if (!err) {
      res.json({
        status: true,
        data: updateItems,
        messages: 'Cập nhật thành công !'
      })
    } else {
      res.json({
        status: false,
        data: {},
        messages: 'Cập nhật thất bại !'
      })
    }
  })
}

const deleteItems = async (req, res) => {
  Subjects.findOneAndRemove({ _id: mongoose.Types.ObjectId(req.body.subjects_id) }, (err) => {
    if (err) {
      res.json({
        status: false,
        messages: `Không thể xóa Subjects id. Lỗi là ${err}`
      })
      return;
    }
    Sections.findOneAndRemove({ SubjectsId: mongoose.Types.ObjectId(req.body.subjects_id) }, (err) => {
      if (err) {
        res.json({
          status: false,
          messages: `Không thể xóa SubjectsId ${req.body.subjects_id}. Lỗi là ${err}`
        })
        return;
      } else {
        res.json({
          status: true,
          messages: 'Xoá thành công !'
        })
      }
    })
  })
}

export {
  getSections,
  insertItemSections,
  updateItemSections,
  deleteItems
}