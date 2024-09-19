const express = require('express');
const router = express.Router();
const Auction = require('../model/auctionModel'); // Assuming you create a model for auctions

// GET route to retrieve similar auction items based on a search term
router.get('/search', async (req, res) => {
    const { keyword } = req.query;
    try {
        // Find auctions with a similar title or description
        const auctions = await Auction.find({
            $or: [
                { title: new RegExp(keyword, 'i') },
                { description: new RegExp(keyword, 'i') }
            ]
        });
        res.json(auctions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching auctions' });
    }
});

module.exports = router;
