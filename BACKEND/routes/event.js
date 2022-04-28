const router = require("express").Router();
const Events = require("../models/event");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const { eventPlace, ePackage, refNo  } = req.body;

  const ePrice = Number(req.body.ePrice);

  const ePplcount = Number(req.body.ePplcount);

  // create a new object using database schema
  const newEvents = new Events({
    refNo,
    eventPlace,
    ePrice,
    ePplcount,
    ePackage,
  });

  const isAvailable = await Events.findOne({
    eventPlace: { $regex: new RegExp(eventPlace, "i") },
  });

  if (isAvailable) {
    return res.status(401).json({
      success: false,
      error: "Alredy Exist in the database, Plase Add new Event place 😍",
    });
  }

  await newEvents
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Events.find()
    .then((event) => res.json(event))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Events.findById(id)
    .then((event) => res.json(event))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Events.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { refNo, eventPlace, ePrice, ePplcount, ePackage } = req.body;

  //find the document by and update the relavant data
  await Events.findByIdAndUpdate(id, {
    refNo,
    eventPlace,
    ePrice,
    ePplcount,
    ePackage,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
