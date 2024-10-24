const express = require('express');
const router = express.Router();
const Market = require('../models/Market');
const Stalls = require('../models/Stalls');

// GET: Fetch markets by city, state, or name
router.get('/markets', async (req, res) => {
    try {
        const { city, state, name } = req.query;

        let query = {};
        if (city) query.city = city;
        if (state) query.state = state;
        if (name) query.name = name;

        const markets = await Market.find(query);

        if (!markets.length) {
            return res.status(404).json({ message: 'No markets found' });
        }

        res.status(200).json({
            message: 'Markets retrieved successfully',
            markets
        });
    } catch (error) {
        console.error('Error fetching markets:', error); // Log detailed error
        res.status(500).json({ message: 'Server error fetching markets', error: error.message });
    }
});

// POST: Create a new market (without stalls)
router.post('/markets', async (req, res) => {
    try {
        const { name, city, state, location, address, marketDay, totalStalls } = req.body;

        // Ensure that all required fields are provided
        if (!name || !city || !state || !location || !address || !marketDay || !totalStalls) {
            return res.status(400).json({ message: 'All fields including stallsAvailable must be provided' });
        }

        // Create a new market
        const newMarket = new Market({
            name,
            city,
            state,
            location,
            address,
            marketDay,
            totalStalls
        });

        // Save the new market to the database
        await newMarket.save();

        res.status(201).json({
            message: 'Market created successfully',
            newMarket
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error creating market', error: error.message });
    }
});


// POST: Search markets based on name, city, or state
router.post('/markets/search', async (req, res) => {
    try {
        const { name, city, state } = req.body;

        // Validate if at least one search parameter is provided
        if (!name && !city && !state) {
            return res.status(400).json({ message: 'Please provide at least one search parameter (name, city, or state)' });
        }

        let query = {};
        if (name) query.name = name;
        if (city) query.city = city;
        if (state) query.state = state;

        const markets = await Market.find(query);

        if (!markets.length) {
            return res.status(404).json({ message: 'No markets found' });
        }

        res.status(200).json({
            message: 'Markets retrieved successfully',
            markets
        });
    } catch (error) {
        console.error('Error searching markets:', error); // Log detailed error
        res.status(500).json({ message: 'Server error searching markets', error: error.message });
    }
});

// GET: Fetch stalls for a specific market based on location
router.get('/markets/:marketId/stalls', async (req, res) => {
    try {
        const { marketId } = req.params;

        // Find stalls by market location
        const stalls = await Stalls.find({ location: marketId });

        if (!stalls.length) {
            return res.status(404).json({ message: 'No stalls found for this market' });
        }

        res.status(200).json({
            message: 'Stalls retrieved successfully',
            stalls
        });
    } catch (error) {
        console.error('Error fetching stalls:', error);
        res.status(500).json({ message: 'Server error fetching stalls', error: error.message });
    }
});

module.exports = router;
