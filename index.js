import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();
const MONGODB_URL = "mongodb+srv://nguyenvanhuy178_v1:1782002vanhuy@cluster0.pjjlkhl.mongodb.net/local_database_movies?retryWrites=true&w=majority"

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(cors(
  { origin: "https://64162f6265f550250d2041b0--admirable-daifuku-f5bcfc.netlify.app/" }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL || MONGODB_URL).then(() => {
  console.log("Mongodb connected ok");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port} Try it!!!`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});
