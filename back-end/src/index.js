import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import path from "path";
// import http from 'http'
// import rateLimit from 'express-rate-limit'
import pinoHttp from "pino-http";
import logger from "../utils/logger.js";

//new
import UserController from "./user/user.controller.js";
import BlogController from "./blog/blog.controller.js";
import LeadController from "./lead/lead.controller.js";
import BlogCategoryController from "./blog-category/blog-category.controller.js";

//authentications
import loginController from "./auth/login/login.controller.js";
import forgotPasswordController from "./auth/forgot-password/forgot-password.controller.js";
import resetPasswordController from "./auth/reset-password/reset-password.controller.js";
import refreshToken from "./auth/refresh-token/refresh.controller.js";
import logoutController from "./auth/logout/logout.controller.js";

// middlewares
// import verifyToken from "./middleware/verify.token.js";
import { upload } from "./middleware/uploadImage.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const allowedOrigins = process.env.ORIGIN.split(",");
app.use(
  cors({
    credentials: true,
    // origin: function (origin, callback) {
    //   if (!origin || allowedOrigins.includes(origin)) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("Not allowed by CORS"));
    //   }
    // },
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(pinoHttp({ logger }));
// app.use(limiter);
app.use(helmet());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

// handleSocket(server)

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/uploads", express.static(__dirname + "/../upload"));

app.use("/api/auth/refresh-token", refreshToken);
app.use("/api/auth/login", loginController);
app.use("/api/auth/logout", logoutController);
app.use("/api/auth/forgot-password", forgotPasswordController);
app.use("/api/auth/reset-password", resetPasswordController);
app.use("/api/v1/user", UserController);
app.use("/api/v1/lead", LeadController);
// app.use("/api/v1/service-category",verifyToken, ServiceCatController);
app.use("/api/v1/blog-category", BlogCategoryController);
app.use("/api/v1/blog", upload.single("image"), BlogController);


const server = app.listen(PORT, () => logger.info(`Server Running On Port ${PORT}`));
export default server;