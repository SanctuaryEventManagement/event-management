const router =  require("express").Router();
const Feedback = require("../models/feedback");

//route for creating insertion to database
router.route("/create").post(async (req, res) => {
    const { fName, fComment, fReply } = req.body;

    const fRating = Number(req.body.fRating);

    const newFeedback = new Feedback({
        fName,
        fComment,
        fRating,
        fReply
    })

    await newFeedback
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
})

//route for fetching all the data
router.route("/").get(async (req, res) => {
    await Feedback.find()
        .then((feedback) => res.json(feedback))
        .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant feedback using id
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Feedback.findById(id)
        .then((feedback) => res.json(feedback))
        .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;
  
    await Feedback.findByIdAndRemove(id) //find by the feedback by id and delete
      .then(() => res.json({ message: "Successfully Deleted" }))
      .catch((error) => res.status(500).json({ success: false, error: error }));
  });

//route for editing a relavant feedback using id
router.route("/update/:id").put(async (req, res) => {
    //backend route for updating relavant data and passing back
    const { id } = req.params;
    const { fName, fComment, fRating } = req.body;

    //find the feedback by id and update the relavant data
    await Feedback.findByIdAndUpdate(id, {
        fName,
        fComment,
        fRating
    })
        .then(() => res.json({ success: true }))
        .catch((error) => res.json({ success: false, error: error }));
});

//route for editing a relavant feedback using id
router.route("/reply/:id").put(async (req, res) => {
    //backend route for updating relavant data and passing back
    const { id } = req.params;

    const { fReply } = req.body;

    //find the feedback by id and update the relavant data
    await Feedback.findByIdAndUpdate(id, {
        fReply
    })
        .then(() => res.json({ success: true }))
        .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;