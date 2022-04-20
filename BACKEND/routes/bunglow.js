const router = require("express").Router();
const Bunglow = require("../models/bunglow");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const { bunglowPlace, bPackage, refNo  } = req.body;

  const bPrice = Number(req.body.bPrice);

  const bPplcount = Number(req.body.bPplcount);

  // create a new object using database schema
  const newBunglow = new Bunglow({
    refNo,
    bunglowPlace,
    bPrice,
    bPplcount,
    bPackage,
  });

  const isAvailable = await Bunglow.findOne({
    bunglowPlace: { $regex: new RegExp(bunglowPlace, "i") },
  });

  if (isAvailable) {
    return res.status(401).json({
      success: false,
      error: "Alredy Exist in the database, Plase Add new bunglow place 😍",
    });
  }

  await newBunglow
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Bunglow.find()
    .then((bunglow) => res.json(bunglow))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Bunglow.findById(id)
    .then((bunglow) => res.json(bunglow))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Bunglow.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { refNo, bunglowPlace, bPrice, bPplcount, bPackage } = req.body;

  //find the document by and update the relavant data
  await Bunglow.findByIdAndUpdate(id, {
    refNo,
    bunglowPlace,
    bPrice,
    bPplcount,
    bPackage,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
