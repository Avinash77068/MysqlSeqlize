import express from "express";
import { dbConnection } from "./src/config/db.js";
import { userModel } from "./src/model/userModel.js";
import router  from "./src/route/userRoute.js";

const app = express();
app.use(express.json());


app.use('/',router)
userModel.sync({force:false})






const server=async()=>{
  try {
    await dbConnection();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}
server()
