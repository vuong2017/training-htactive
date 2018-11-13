import mongoose from 'mongoose';

const { Schema } = mongoose;

const posts = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: 'sections' },
    title: { type: String, required: [true, 'Không được để trống Title'] },
    content: { type: String, required: [true, 'Không được để trống Content'] },
    status: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Posts = mongoose.model('posts', posts);
export default Posts;
