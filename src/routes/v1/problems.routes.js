const express=require("express");

const {problemController}=require("../../controllers")

const problemRouter=express.Router();

// if any request come and route continues with /ping , we rout it with pingProblemController

problemRouter.get("/ping",problemController.pingProblemController);
problemRouter.get("/:id",problemController.getProblem);
problemRouter.get("/",problemController.getProblems);
problemRouter.post("/",problemController.addProblem);
problemRouter.delete("/:id",problemController.deleteProblem);
problemRouter.put("/:id",problemController.updateProblem);


module.exports=problemRouter;   
