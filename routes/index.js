const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('Landing page'))

module.exports = router