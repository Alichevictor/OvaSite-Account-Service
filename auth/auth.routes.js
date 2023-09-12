import {
    registerUser, loginUser, logoutUser, protect, updatePassword, forgotPassword, resetPassword
  } from "./auth.controllers.js";
  
  import express from "express";
  
  const authRouter = express.Router();
  
  authRouter.post("/register", registerUser);
  authRouter.post("/login", loginUser);
  authRouter.post("/logout", logoutUser);
  authRouter.post("/forgotPassword", forgot-password);
  authRouter.patch("/resetPassword/:token", reset-password);
  
  
  authRouter.use(protect);
  authRouter.patch("/update-password", update-password);
  
  
  export default authRouter;