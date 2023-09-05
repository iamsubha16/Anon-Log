import express from "express";

import { signupUser, loginUser } from "../controller/user.js";
import { uploadImage } from "../controller/image.js";
//middle-ware
import upload from "../utilities/upload.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.post("/file/upload", upload.single("file"), uploadImage);

export default router;
