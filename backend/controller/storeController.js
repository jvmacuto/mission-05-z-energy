// storeController.js
const Store = require("../model/storeModel"); // Assuming you have a store model

// Controller function to get store information
exports.getStoreInfo = async (req, res) => {
  try {
    const storeId = req.params.storeId;
    const store = await Store.findById(storeId);

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    res.json(store);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving store information" });
  }
};
