function pingProblemController(req,res)
{
    return res.json({message:"Ping Controleer is up"});
}

function addProblem(req,res)
{
    console.log("problem added");
}

function getProblem(req,res)
{
    console.log("problem fetched")
}

function deleteProblem(req,res)
{
    console.log("problems deleted");
}
function updateProblem(req,res)
{
    console.log("problems deleted");
}
function getProblems(req,res)
{

}
module.exports={
    addProblem,
    deleteProblem,
    getProblem,
    updateProblem,
    getProblems,
    pingProblemController
}