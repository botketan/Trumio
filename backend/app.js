import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/configdb.js";
import getAdminRouter from "./config/adminbro.js";
import ciaRouter from "./routes/ciaRoutes.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";
import mentorRouter from "./routes/mentorRoutes.js";
import communityRouter from "./routes/communityRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
dotenv.config();

let db = await connectDB();
const app = express();
const getAdminRouterPromise= getAdminRouter(db);

app.use(cookieParser('secret'));
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use('/admin', getAdminRouterPromise);
app.use('/cia', ciaRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/community', communityRouter);
app.use('/mentor', mentorRouter);
app.use('/project', projectRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
