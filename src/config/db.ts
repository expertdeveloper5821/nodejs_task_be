import mongoose from "mongoose";
import { environmentConfig } from '../config/envConfig';


const dbUrl:string = environmentConfig.DB_URL || '';
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database not connected", error);
  });
