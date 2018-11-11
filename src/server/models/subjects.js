import mongoose from 'mongoose';

const { Schema } = mongoose;

const subjects = new Schema(
  {
    name: { type: String, required: [true, 'Không được để trống Name'] },
    title: { type: String, required: [true, 'Không được để trống Title'] },
    tagline: { type: String, required: [true, 'Không được để trống TagLine'] },
    logo: { type: String, required: [true, 'Không được để trống Logo'] },
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Subjects = mongoose.model('subjects', subjects);
export default Subjects;
