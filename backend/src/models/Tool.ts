import mongoose, { Document, Schema } from 'mongoose';

export interface ITool extends Document {
  title: string;
  desc: string;
  createdBy: string; // Assuming this will be a User ID later
  icon: string;
  gradient: string;
  status: 'Ready' | 'Coming Soon' | 'Beta';
  website?: string; // Optional
  size: 'large' | 'small';
  createdAt: Date;
  updatedAt: Date;
}

const ToolSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  createdBy: { type: String, required: true }, // Will likely be ref to User later
  icon: { type: String, required: true },
  gradient: { type: String, required: true },
  status: { type: String, enum: ['Ready', 'Coming Soon', 'Beta'], default: 'Coming Soon' },
  website: { type: String },
  size: { type: String, enum: ['large', 'small'], default: 'large' },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

export default mongoose.model<ITool>('Tool', ToolSchema);
