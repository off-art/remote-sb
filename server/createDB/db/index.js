const db = require('../connect')

const createDB = async () => {
  await db.query(`
    CREATE SCHEMA buttons;
  `)
  await db.query(`
    CREATE TABLE buttons.isopen( 
    isopen Boolean NOT NULL,
    deviceid Integer NOT NULL );
  `)
  await db.query(`
    CREATE TABLE buttons.power ( 
    power Boolean DEFAULT false NOT NULL,
    deviceid Integer NOT NULL,
    CONSTRAINT "unique_power_deviceid" UNIQUE( "deviceid" ) );
  `)
  await db.query(`
    CREATE TABLE buttons.volume ( 
    volume Boolean NOT NULL,
    deviceid Integer NOT NULL );
  `)
  await db.query(`
    CREATE SCHEMA sber;
  `)
  await db.query(`
    CREATE TABLE sber.location ( 
    id Integer DEFAULT 0 NOT NULL,
    name Character Varying NOT NULL,
    img Character Varying );
  `)

  await db.query(`
    CREATE TABLE sber.devices ( 
    id Integer DEFAULT 0 NOT NULL,
    name Character Varying NOT NULL,
    location_id Integer,
    power Boolean DEFAULT false NOT NULL,
    pic Character Varying DEFAULT 'no.png'::character varying NOT NULL,
    open Boolean DEFAULT false NOT NULL,
    volume Boolean DEFAULT false NOT NULL,
    PRIMARY KEY ( "id" ) );
  `)
}

createDB()
