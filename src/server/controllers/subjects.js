import Subjects from '../models/subjects';

const getSubjects = async (req, res) => {
  try {
    const result = await Subjects.find();
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ errors: 'Internal Server Error' });
  }
};

const insertSubjects = async (req, res) => {
  try {
    const fileName = req.file ? req.file.originalname : '';
    req.body.logo = fileName;
    const insertData = await new Subjects(req.body);
    const result = await insertData.save();
    if (result) {
      const data = {
        status: 'Thành Công',
        content: result,
        messages: 'Thêm Mới Thành Công'
      };
      res.status(200).json(data);
    }
  } catch (err) {
    if (err.name === 'MongoError') {
      res.status(500).json({ errors: 'Internal Server Error' });
    }
    res.status(401).json(err);
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
        status: 'Thành Công',
        content: result,
        messages: 'Cập Nhật Thành Công'
      };
      res.status(200).json(data);
    }
  } catch (err) {
    if (err.name === 'MongoError') {
      res.status(500).json({ errors: 'Internal Server Error' });
    }
    res.status(404).json(err);
  }
};

const deleteSubjects = async (req, res) => {
  try {
    const result = await Subjects.findOneAndRemove({ _id: req.params.id });
    if (result) {
      const data = {
        status: 'Thành Công',
        content: result,
        messages: 'Xóa Thành Công'
      };
      res.status(200).json(data);
    }
  } catch (err) {
    if (err.name === 'MongoError') {
      res.status(500).json({ errors: 'Internal Server Error' });
    }
    res.status(404).json(err);
  }
};

export {
  getSubjects,
  insertSubjects,
  updateSubjects,
  deleteSubjects
};
