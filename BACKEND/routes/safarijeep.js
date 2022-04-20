const router = require("express").Router();
const Safari = require("../models/safarijeep");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
    
  const sPrice = Number(req.body.sPrice);

  const sPplCount = Number(req.body.sPplCount);

  // create a new object using database schema
  const newSafari = new Safari({
    sPrice,
    sPplCount,
  });

  await newSafari
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Safari.find()
    .then((safari) => res.json(safari))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Safari.findById(id)
    .then((safari) => res.json(safari))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Safari.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { sPrice, sPplCount } = req.body;

  //find the document by and update the relavant data
  await Safari.findByIdAndUpdate(id, {
    sPrice,
    sPplCount,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
