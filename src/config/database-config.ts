import Mongoose from 'mongoose';

export default function databaseConfig() {
  Mongoose.connect('mongodb://localhost:27017/apivendas');
  const connection = Mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
}
