import { Schema, model, connect } from 'mongoose';

export interface IBuilding {
  id?: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  plans: [{}];
}

const BuildingSchema = new Schema<IBuilding>(
  {
    id: { type: String, required: false },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal: { type: String, required: true },
    plans: [{}],
  },
  { timestamps: true }
);

const Building = model<IBuilding>('User', BuildingSchema);

export default Building;
