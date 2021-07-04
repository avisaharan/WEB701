const { Router } = require('express')
const Item = require('../models/Item')
const { json } = require('body-parser')

const router = Router()

function ensureLogin(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({ message: 'Not authenticated' })
    }
    next()
}

router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        if (!items) {
            throw new Error('No items found')
        }
        res.status(200).json(items)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/myItemsList', ensureLogin, async (req, res) => {
    try {
        const items = await Item.find({ user_id: req.user._id }).exec()
        if (!items) {
            throw new Error('No items found')
        }
        res.status(200).json(items)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/', ensureLogin, async (req, res) => {
    const { name, value, date } = req.body
    const newItem = new Item({ name, value, date, user_id: req.user._id })

    try {
        const item = await newItem.save()
        if (!item) {
            throw new Error('There was an error saving the item.')
        }
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', ensureLogin, async (req, res) => {
    const { id } = req.params
    try {
        const item = await Item.findById(id)
        if (!item) {
            throw new Error('No item was found')
        }

        if (item.user_id !== String(req.user._id)) {
            return res.status(403) / json({ message: 'Unauthorized' })
        }

        const removed = await item.remove()

        if (!removed) {
            throw new Error('There was a problem deleting the item')
        }
        res.status(200).json({ id })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post(
    '/buyStuff',
    async (req, res) => {
        const {cartItems} = req.body
        let item,removed;
        try {
            for (var i = 0; i < cartItems.length; i++) {
                item = await Item.findById(cartItems[i]._id)
                if (!item) {
                    throw new Error('No item was found')
                }
                removed = await item.remove()
                if (!removed) {
                    throw new Error('There was a problem deleting the item')
                }
            }
            res.status(200).json("")
        } catch (error) {
            return res.send("Error")
        }
    }
)

module.exports = router
