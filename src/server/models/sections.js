import mongoose from 'mongoose'

const { Schema } = mongoose

const sections = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'subjects'
  },
  name: {
    type: String,
    required: [true, 'Không được để trống Name']
  },
  posts: [{
    type: Schema.Types.ObjectId, ref: 'posts'
  }],
  SubjectsId: Schema.ObjectId,
},
  {
    timestamps: {
      createdAt: 'created_at'
    }
  })

const Sections = mongoose.model('sections', sections)
export default Sections
