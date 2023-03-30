const router = require("express").Router();
const phones = require("../phones.json");

// GET "/phones" => Show all phones
router.get("/", (req, res, next) => {
  res.json(phones);
});

// GET "/phones/:id" => Show phone details
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  const foundPhone = phones.find((phone) => {
    return (phone.id = id);
  });

  res.json(foundPhone);
});

module.exports = router;
