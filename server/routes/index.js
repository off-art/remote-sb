let {
  getLoacation,
  getDevices,
  setButtons,
  buttonStatus,
  getButtons,
  powerChange,
  openChange
} = require('../routes/help')

let express = require('express')

let router = express.Router()

router.get('/', async function (req, res, next) {
  let data = await getLoacation()
  res.json({ data })
})

router.get('/:id', async function (req, res, next) {
  let data = await getDevices(req.params.id)
  res.json({ data })
})
router.post('/getdevices', async function (req, res, next) {
  let data = await getDevices(req.body.id)
  res.json({ data })
})
router.post('/setbuttons', async function (req, res, next) {
  let data = {}
  await setButtons(req.body.isChange, req.body.id)
  res.json({ data })
})
router.post('/buttonstatus', async function (req, res, next) {
  let data = await buttonStatus(req.body.id)
  res.json({ data })
})
router.post('/getbuttons', async function (req, res, next) {
  let data = await getButtons(req.body.devices)
  res.json({ data })
})
router.post('/pushbuttonpower', async function (req, res, next) {
  let data = {}
  await powerChange(req.body.id, req.body.state)
  res.json({ data })
})
router.post('/pushbuttonopen', async function (req, res, next) {
  let data = {}
  await openChange(req.body.id, req.body.state)
  res.json({ data })
})

module.exports = router
