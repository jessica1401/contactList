const express = require('express');
const router = express.Router();
const contactControoler = require('../controllers/contact_controller');

router.get('/', contactControoler.contact);
router.post('/create-contact', contactControoler.createContact);
router.get('/delete-contact', contactControoler.deleteContact);


module.exports = router;