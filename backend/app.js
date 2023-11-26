import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/configdb.js";
import getAdminRouter from "./config/adminbro.js";
import ciaRouter from "./routes/ciaRoutes.js";
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


app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
