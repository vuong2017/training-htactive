import Subjects from '../models/subjects';
import Sections from '../models/sections';
import Posts from '../models/posts';
import mongoose from 'mongoose';

const getSubjects = async (req, res) => {
  try {
    const result = await Subjects.find();
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Lấy Dữ Liệu Thành Công'
      };
      return res.status(200).json(data);
    }
  } catch (error) {
    const data = {
      status: false,
    };
    return res.status(500).json(data.messages = 'Internal Server Error');
  }
};

const getSubjectsJoin = async (req, res) => {
  try {
    Subjects.findOne({ _id: req.params.id })
      .populate([{ path: 'sections', populate: { path: 'posts' } }])
      .exec(function (err, result) {
        if (err) return res.status(404).json({
          status: false,
          messages: "Không tìm thấy id"
        });
        if (result) {
          const data = {
            status: true,
            content: result,
            messages: 'Lấy Dữ Liệu Thành Công'
          };
          return res.status(200).json(data);
        } else {
          return res.status(404).json({
            status: false,
            messages: "Không tìm thấy dư liệu"
          });
        }
      });
  } catch (error) {
    const data = {
      status: false,
    };
    return res.status(500).json(data.messages = 'Internal Server Error');
  }
};

const getSelect = async (req, res, next) => {
  if (!req.query.name) {
    res.json({
      status: false,
      data: [],
      messege: "Input parameters is wrong!. 'name' must be not NULL"
    })
  }
  var criteria = {
    name: new RegExp('^' + req.query.name + '$', "i")
  };
  var limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 100;
  Subjects.find(criteria).limit(limit).sort({ name: 1 }).select({
    name: 1,
    title: 1,
    tagline: 1,
    status: 1
  }).exec((err, items) => {
    if (err) {
      res.json({
        status: false,
        data: [],
        message: `Error is: ${err}`
      })
    } else {
      res.json({
        status: true,
        data: items,
        count: items.length,
        message: `Search Suucess item !`
      })
    }
  })
}

const insertSubjects = async (req, res) => {
  try {
    const fileName = req.file ? req.file.originalname : '';
    req.body.logo = fileName;
    const insertData = await new Subjects(req.body);
    const result = await insertData.save();
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Thêm Mới Thành Công'
      };
      return res.status(200).json(data);
    }
  } catch (err) {
    const data = {
      status: false,
    };
    if (err.name === 'MongoError') {
      return res.status(500).json(data.messages = 'Internal Server Error');
    }
    res.status(401).json({
      status: false,
      data: [],
      messages: err
    });
  }
};

const updateSubjects = async (req, res) => {
  try {
    const fileName = req.file ? req.file.originalname : '';
    req.body.logo = fileName;
    const result = await Subjects.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Cập Nhật Thành Công'
      };
      return res.status(200).json(data);
    }
  } catch (err) {
    const data = {
      status: false,
    };
    if (err.name === 'MongoError') {
      return res.status(500).json(data.messages = 'Internal Server Error');
    }
    res.status(401).json({
      status: false,
      data: [],
      messages: err
    });
  }
};

const deleteSubjects = async (req, res) => {
  try {
    const result = await Subjects.findOneAndRemove({ _id: req.params.id });
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Xóa Thành Công'
      };
      return res.status(200).json(data);
    }
  } catch (err) {
    const data = {
      status: false,
    };
    if (err.name === 'MongoError') {
      return res.status(500).json(data.messages = 'Internal Server Error');
    }
    res.status(401).json({
      status: false,
      data: [],
      messages: err
    });
  }
};

export {
  getSubjects,
  insertSubjects,
  updateSubjects,
  deleteSubjects,
  getSubjectsJoin,
  getSelect
};
