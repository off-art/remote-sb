const db = require('../connect')

const seed = async() => {
  await db.query(`
    INSERT INTO buttons.isopen VALUES 
    (false,1),
    (false,2),
    (false,3),
    (false,4),
    (false,5),
    (false,6),
    (false,7),
    (false,8),
    (false,9),
    (false,10),
    (false,11);
  `)
  await db.query(`
    INSERT INTO buttons.power VALUES
    (false,1),
    (false,2),
    (true,3),
    (false,4),
    (true,5),
    (false,6),
    (true,7),
    (false,8),
    (true,9),
    (false,10),
    (false,11);
  `)
  await db.query(`
    INSERT INTO buttons.volume VALUES
    (0,1),
    (0,2),
    (0,3),
    (0,4),
    (0,5),
    (0,6),
    (0,7),
    (0,8),
    (0,9),
    (0,10),
    (0,11);
  `)
  await db.query(`
    INSERT INTO test.location VALUES
    (1, 'home', '/img/home.svg'),
    (2, 'garage', '/img/garage.svg');
  `)

  await db.query(`
    INSERT INTO test.devices VALUES
    (1, 'Tv', 1, false, '/img/tv.svg',  false, false),
    (2, 'Lamp', 1, false, '/img/lamp.svg', false, false),
    (3, 'Washer', 2, false, '/img/washer.svg', false, false),
    (4, 'Gate', 2, false, '/img/gate.svg', false, false),
    (5, 'Kettle', 1, false, '/img/kettle.svg', false, false),
    (6, 'Lamp', 2, false, '/img/lamp.svg', false, false),
    (7, 'Door', 1, false, '/img/door.svg', false, false),
    (8, 'Door', 2, false, '/img/door.svg', false, false),
    (9, 'Refrigerator', 1, false, '/img/refrigerator.svg', false, false),
    (10, 'Robot', 1, false, '/img/robot.svg', false, false),
    (11, 'Speaker', 2, false, '/img/speaker.svg', false, false);
  `)


}

seed()
