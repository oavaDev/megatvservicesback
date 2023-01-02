require('dotenv').config();
import mongoose from 'mongoose';

const connect = async () => {
  const mongoUri = process.env.APP_MONGO_URI || '';
  mongoose.set('strictQuery', false);
  mongoose.connect(mongoUri);

  mongoose.connection.once('open', () => {
    console.log('Connection with database OK');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected succesfully');
  });

  mongoose.connection.on('error', () => {
    console.log('There was an error');
  });

  await mongoose.connect(mongoUri);
};

async function disconnected() {
  await mongoose.disconnect();
}

export { connect, disconnected };
