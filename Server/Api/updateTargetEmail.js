const express = require("express");
const router = express.Router();
const projectModel = require("../Model/userProjects");

router.post("/", async (req, res) => {
  const { userName, FormId, NewTargetEmail } = req.body; // data to be changed;

  

  try {
    const result = await projectModel.findOneAndUpdate(
      { userName },
      { $set: { "projects.$[elem].targetEmail": NewTargetEmail } },
      { arrayFilters: [{ "elem._id": FormId }] },
      
    );

    res.send({ status: "ok" });
  } catch (err) {
    res.send({ status: "error" });
  }

 
});

module.exports = router;
