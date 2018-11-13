import mongoose from 'mongoose';

const { Schema } = mongoose;

const sections = new Schema(
  {
    sectionsId: { type: Schema.Types.ObjectId, ref: 'subjects' },
    name: { type: String, required: [true, 'Không được để trống Name'] }
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Sections = mongoose.model('sections', sections);
export default Sections;
