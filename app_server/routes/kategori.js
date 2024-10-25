const express = require('express');
const router = express.Router();

const KategoriController = require('../controllers/KategoriController');
router.get('/kategori', KategoriController.index);
router.post('/kategori/insert', KategoriController.insert);
module.exports = router;