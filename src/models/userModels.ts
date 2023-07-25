import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  value: number;
  timestamp: Date;
  label: string;
}

const DataSchema: Schema = new Schema({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  label: { type: String, required: true },
});

export default mongoose.model<IData>('Data', DataSchema);
