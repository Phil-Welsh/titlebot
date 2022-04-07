const db = require('../models');
const fetch = require('node-fetch')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let title = ""

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
    fetch(req.body.url)
        .then((response) => response.text())
        .then((html) => {
            const dom = new JSDOM(html);
            title = dom.window.document.querySelector("title").textContent
        }).then(() => {

            console.log(title)

            db.Title.create({title}, (err, savedTitle) => {

            if (err) console.log('Error in titles#create:', err)

            res.status(201).json({ title: savedTitle })
                }
            )
        }
    )
}



module.exports = {
    index,
    create
}
