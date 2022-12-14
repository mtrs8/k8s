import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connectToDatabase = async (): Promise<void> => {
  //const options: ConnectOptions = { autoIndex: true }
  mongoose.set('strictQuery', true)

  // const {
  //   DB_USER,
  //   DB_PASSWORD,
  //   DB_HOST,
  //   DB_PORT,
  //   DB_NAME,
  // } = process.env;

 await mongoose.connect(`mongodb://root:example@db:27017/admin`)
  .then(() => console.log("Connected to the database!"))
  .catch((err) => {
    console.log("Cannot connect to the database ", err)
    process.exit()
  });
};

export { connectToDatabase };