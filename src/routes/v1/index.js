const express=require("express");

const problemRouter=require("./problems.routes");

const v1Router=express.Router();

// if any request comes and rout continue with /problem , we route it with problemRouter

v1Router.use("/problems",problemRouter);

module.exports=v1Router;