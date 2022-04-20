const router = require("express").Router();
const Logistics = require("../models/logistics");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const { pID, pName,demand } = req.body;

  const quantity = Number(req.body.quantity);

  const unitPrice = Number(req.body.unitPrice);

  // create a new object using database schema
  const newLogistics = new Logistics({
    pID,
    pName,
    quantity,
    unitPrice,
    demand
  });

  const isAvailable = await Logistics.findOne({
    pID: { $regex: new RegExp(pID, "i") },
  });

  if (isAvailable) {
    return res.status(401).json({
      success: false,
      error: "Alredy Exist in the database, Plase Add new product 😍",
    });
  }

  await newLogistics
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Logistics.find()
    .then((logistic) => res.json(logistic))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Logistics.findById(id)
    .then((logistics) => res.json(logistics))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Logistics.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { pID, pName, quantity, unitPrice, demand } = req.body;

  //find the document by and update the relavant data
  await Logistics.findByIdAndUpdate(id, {
    pID,
    pName,
    quantity,
    unitPrice,
    demand,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
