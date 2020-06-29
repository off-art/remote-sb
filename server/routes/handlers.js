let {
  getLoacation,
  getDevices,
  setButtons,
  buttonStatus,
  getButtons,
  powerChange,
  openChange,
  volumeChange
} = require('./help')

async function getLoc(req, res, next) {
  let data = await getLoacation()
  res.json({ data })
}

async function getDev (req, res, next) {
  let data = await getDevices(req.params.id)
  res.json({ data })
}
async function getDevs (req, res, next) {
  let data = await getDevices(req.params.id)
  res.json({ data })
}

async function setButt (req, res, next) {
  let data = {}
  await setButtons(req.body.isChange, req.body.id)
  res.json({ data })
}

async function statusBtn (req, res, next) {
  let data = await buttonStatus(req.body.id)
  res.json({ data })
}

async function getButt (req, res, next) {
  let data = await getButtons(req.body.devices)
  res.json({ data })
}

async function pwrchange (req, res, next) {
  let data = {}
  await powerChange(req.body.id, req.body.state)
  res.json({ data })
}

async function  openChan(req, res, next) {
  let data = {}
  await openChange(req.body.id, req.body.state)
  res.json({ data })
}

async function volChange(req, res, next) {
  let data = {}
  await volumeChange(req.body.id, req.body.state)
  res.json({ data })
}


module.exports = {
  getLoc,
  getDev,
  setButt,
  statusBtn,
  getButt,
  pwrchange,
  openChan,
  volChange,
  getDevs
}
