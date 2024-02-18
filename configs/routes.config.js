const express = require('express');
const router = express.Router();

const event = require('../controllers/events.controller')

router.get('/', (req, res, next) => res.redirect('/events'));
router.get('/events', event.list);
router.get('/events/:id', event.detail);
router.get('/events/:id/delete', event.delete);
router.get('/create', event.create);
router.post('/create', event.doCreate);

module.exports = router