import express, { Express } from 'express';
import cors from 'cors';
import '../config/db';
import { environmentConfig } from '../config/envConfig';
import { configureCors } from '../config/corsConfig';

const app: Express = express();
const port: number = environmentConfig.SERVER_PORT;



// cors middleware 
app.use(configureCors());

// import route
import dataRoute from '../routes/userRoute';


// Pass the io object to req.app
app.use(cors());
app.use(express.json());
app.use('/v1', dataRoute);


app.get('/', (req, res) => {
  res.send("Welcome")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
