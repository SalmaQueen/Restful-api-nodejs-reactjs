import dotenv from 'dotenv';
import express from 'express';
import router from './Router/router';
import mongoose from 'mongoose';
import cors from 'cors';


dotenv.config({ path: './config/.env' });

const app = express();
const port = 5000;


// Enable CORS
app.use(cors());

app.use(express.json());

// POST route handler
app.use('/api',router);



mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
   
app.listen(port, () => {
    console.log('server listening on port ' + port)
});
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
