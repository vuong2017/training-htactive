import Subjects from '../models/subjects'
import Sections from '../models/sections'
import Posts from '../models/posts'
import mongoose from 'mongoose'

const getSubjects = async (req, res) => {
  try {
    const result = await Subjects.find()
    if (result) {
      const data = {
        status: true,
        content: result,
        message: 'Lấy Dữ Liệu Thành Công'
      }
      return res.status(200).json(data)
    }
  } catch (error) {
    const data = {
      status: false,
    }
    data.messages = 'Internal Server Error'
    return res.status(500).json(data)
  }
}

const getSubjectsJoin = async (req, res) => {
  try {
    Subjects.findOne({ _id: req.params.id })
      .populate([{ path: 'sections', populate: { path: 'posts' } }])
      .exec(function (err, result) {
        if (err) return res.status(404).json({
          status: false,
          messages: "Không tìm thấy id"
        })
        if (result) {
          const data = {
            status: true,
            content: result,
            messages: 'Lấy Dữ Liệu Thành Công'
          }
          return res.status(200).json(data)
        } else {
          return res.status(404).json({
            status: false,
            messages: "Không tìm thấy dư liệu"
          })
        }
      })
  } catch (error) {
    const data = {
      status: false,
    }
    data.messages = 'Internal Server Error'
    return res.status(500).json(data)
  }
}

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
  }
  var limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 100
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
    const fileName = req.file ? req.file.filename : ''
    req.body.logo = fileName
    const insertData = await new Subjects(req.body)
    const result = await insertData.save()
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Thêm Mới Thành Công'
      }
      return res.status(200).json(data)
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu Subjects" }
    }
  } catch (error) {
    const data = {
      status: false
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id"
      return res.status(404).json(data)
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error"
      return res.status(500).json(data)
    }
    return res.status(401).json(error)
  }
}

const updateSubjects = async (req, res) => {
  try {
    if(req.file) {
      const fileName = req.file.filename
      req.body.logo = fileName
    }
    const result = await Subjects.findOneAndUpdate(
      { _id: req.body.id },
      { $set: req.body },
      { new: true }
    )
    if (result) {
      const data = {
        status: true,
        content: result,
        messages: 'Cập Nhật Thành Công'
      }
      return res.status(200).json(data)
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu Subjects" }
    }
  } catch (error) {
    const data = {
      status: false
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id"
      return res.status(404).json(data)
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error"
      return res.status(500).json(data)
    }
    return res.status(401).json(error)
  }
}

const deleteSubjects = async (req, res) => {
  try {
    const result = await Subjects.findOneAndRemove({ _id: req.body.id })
    if (result) {
      if (result.sections.length !== 0) {
        const deleteChildren = await new Promise(async resolve => {
          result.sections.map(async (e, i) => {
            const deleteSections = await Sections.findOneAndRemove({_id: e})
            if (deleteSections.posts.length !== 0) {
              const deletePosts =  await new Promise(async resolve => {
                const kq = deleteSections.posts.map(async (e, i) => {
                  await Posts.findOneAndRemove({_id: e})
                  resolve()
                })
              })
            }
            resolve()
          })
        })
      }
      const data = {
        status: true,
        content: result,
        messages: 'Xóa Thành Công'
      }
      return res.status(200).json(data)
    } else {
      throw { status: false, messages: "Không tìm thấy dữ liệu Subjects" }
    }
  } catch (err) {
    const data = {
      status: false
    }
    if (error.name === "CastError") {
      data.messages = "Không tìm thấy id"
      return res.status(404).json(data)
    }
    if (error.name === "MongoError") {
      data.messages = "Internal Server Error"
      return res.status(500).json(data)
    }
    return res.status(401).json(error)
  }
}

export {
  getSubjects,
  insertSubjects,
  updateSubjects,
  deleteSubjects,
  getSubjectsJoin,
  getSelect
}
