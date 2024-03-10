import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./src/config/connectdb.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//cors policy
app.use(cors({
  "origin": "https://gym-book-api.vercel.app/",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use(express.json());

//load routes
app.use('/', (req, res) => {
  res.json({ "messaage": "backend" });
})

app.use("/api/gymbook", userRoutes);

// /**
//  * Connects to the database using the provided URL and starts the server listening on the specified port.
//  * @returns None
//  */
async function main() {
  await connectDB(DATABASE_URL);
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
main();
