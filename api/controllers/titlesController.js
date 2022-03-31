const db = require('../models');

const index = (req, res) => {

    db.Title.find( (err, foundTitles) => {
        if (err) console.log('Error in titles#index:', err)

        if (!foundTitles) return res.json({
            message: 'No Titles found in database.'
        })

        res.status(200).json({ titles: foundTitles });
    })
}

const create = (req, res) => {
    db.Title.create(req.body, (err, savedTitle) => {
        if (err) console.log('Error in titles#create:', err)

        res.status(201).json({ title: savedTitle })
    })
}

module.exports = {
    index,
    create
};
