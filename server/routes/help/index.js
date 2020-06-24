const db = require('../../db/index')



async function getLoacation() {
  let res = await db.query(`SELECT * FROM sber.location`)
  return res.rows
}

async function getDevices(id) {
  let res = await db.query(`
    SELECT * , buttons.power.power
    FROM sber.devices
    JOIN buttons.power ON buttons.power.deviceid = id
    WHERE
    location_id = '${id}'
  `)
  return res.rows
}
async function buttonStatus(id) {
  let obj = {}
  let power = await db.query(`
  SELECT * FROM buttons.power
  WHERE
  deviceid = '${id}' 
  `)
  power.rows.length > 0 ? (obj.power = true) : (obj.power = false)

  let isopen = await db.query(`
  SELECT * FROM buttons.isopen
  WHERE
  deviceid = '${id}' 
  `)
  isopen.rows.length > 0 ? (obj.isopen = true) : (obj.isopen = false)

  let volume = await db.query(`
  SELECT * FROM buttons.volume
  WHERE
  deviceid = '${id}' 
  `)
  volume.rows.length > 0 ? (obj.volume = true) : (obj.volume = false)
  return obj
}

async function setButtons(obj, id) {
  if (obj.type === 'power') {
    if (obj.power) {
      await db.query(`
      INSERT INTO buttons.power (deviceid, power) VALUES ('${id}', false)
      `)
    } else {
      await db.query(`
      DELETE FROM buttons.power
      WHERE
      deviceid = '${id}' 
      `)
    }
  }
  if (obj.type === 'volume') {
    if (obj.volume) {
      await db.query(`
      INSERT INTO buttons.volume (deviceid) VALUES ('${id}')
      `)
    } else {
      await db.query(`
      DELETE FROM buttons.volume
      WHERE
      deviceid = '${id}' 
      `)
    }
  }
  if (obj.type === 'isopen') {
    if (obj.isopen) {
      await db.query(`
      INSERT INTO buttons.isopen (deviceid, isopen) VALUES ('${id}', false)
      `)
    } else {
      await db.query(`
      DELETE FROM buttons.isopen
      WHERE
      deviceid = '${id}' 
      `)
    }
  }
}

async function getButtons(arr) {
  const obj = {}

  for (let i of arr) {
    obj[i.id] = {}

    let power = await db.query(`
    SELECT * FROM buttons.power
    WHERE
    deviceid = '${i.id}' 
    `)
    if (power.rows.length > 0) {
      obj[i.id].power = true
      obj[i.id].statePower = power.rows[0].power
    }

    let volume = await db.query(`
    SELECT * FROM buttons.volume
    WHERE
    deviceid = '${i.id}' 
    `)
    if (volume.rows.length > 0) {
      obj[i.id].volume = true
      obj[i.id].stateVolume = volume.rows[0].volume
    }
    let isopen = await db.query(`
    SELECT * FROM buttons.isopen
    WHERE
    deviceid = '${i.id}' 
    `)
    if (isopen.rows.length > 0) {
      obj[i.id].isopen = true
      obj[i.id].stateIsOpen = isopen.rows[0].isopen
    }
  }

  return obj
}
async function powerChange(id, state) {
  await db.query(`
    UPDATE buttons.power SET power = '${state}'
    WHERE
    deviceid = '${id}' 
  `)
}

async function openChange(id, state) {
  await db.query(`
    UPDATE buttons.isopen SET isopen = '${state}'
    WHERE
    deviceid = '${id}' 
  `)
}

module.exports = {
  getLoacation,
  getDevices,
  setButtons,
  buttonStatus,
  getButtons,
  powerChange,
  openChange,
  openChange
}
