const express = require('express')
const router = express.Router()

const menuController = require("../Controller/MenuController")

router.get('/show', menuController.getData)
router.get('/show/:menuId', menuController.getDataByID)
router.put('/update/:menuId', menuController.updateDataByID)
router.delete('/delete/:menuId', menuController.deleteDataByID)
router.post('/create', menuController.createData)

module.exports = router