// db.js

const { connect } = require('mongoose');

const dbConnect = () => {
  connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => console.log('MongoDB connected successfully'),
    (error) => console.log(`MongoDB connection error: ${error}`)
  );
};

module.exports = { dbConnect };
