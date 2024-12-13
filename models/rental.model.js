const logger = require("../logs/loggers");
const time = require("../logs/realtime");
const datetime = require("../logs/daytime");
const db = require("../config/connect")();

const Rental = {
  //get all
  all: async (callback) => {
    try {
      sql = 'SELECT idrental, r.id_user, r.id_vehicle, name, mobile, name_vehicle, numb_regist, total, avatar, rentdate, returndate, state, deleted_rental, deleted_rental_at FROM rental r, user u, vehicle v WHERE r.id_user = u.id_user AND r.id_vehicle = v.id_vehicle AND deleted_rental = 0 ORDER BY `idrental` DESC';
      await db.query(sql, callback);
      logger.info(sql, { time });
    } catch (err) {
      logger.error(err);
    }
  },

  search: async (search, callback) => {
    try {
      sql = "SELECT idrental, r.id_user, r.id_vehicle, name, mobile, name_vehicle, numb_regist, total, avatar, delete_rental, deleted_rental_at " + 
      "FROM rental r, user u, vehicle v " +
      "WHERE u.id_user = r.id_user AND v.id_vehicle = r.id_vehicle " +
      'AND name LIKE "%"?"%" OR mobile LIKE "%"?"%" OR rent_price LIKE "%"?"%" OR numb_regist LIKE "%"?"%" ' +
      "ORDER BY `idrental` DESC";
      await db.query(
        'SELECT idrental, r.id_user, r.id_vehicle, name, mobile, name_vehicle, numb_regist, total, avatar, rentdate, returndate, state, deleted_rental, deleted_rental_at FROM rental r, user u, vehicle v WHERE r.id_user = u.id_user AND r.id_vehicle = v.id_vehicle AND deleted_rental = 0 AND name LIKE "%"?"%" OR mobile LIKE "%"?"%" OR total LIKE "%"?"%" OR numb_regist LIKE "%"?"%"  ORDER BY `idrental` DESC',
        [search, search, search, search],
        callback 
      );
      logger.info(
        sql,
        [{ search }, { time }]
      );
    } catch (err) {
      logger.error(err, time);
    }
  },
  
create: async (input, callback) => {
  try {
    sql = "INSERT INTO rental (id_user , id_vehicle, rentdate, returndate, total) VALUES (?, ?, ?, ?, ?)",
    await db.query(
      "INSERT INTO rental (id_user , id_vehicle, rentdate, returndate, total) VALUES (?, ?, ?, ?, ?)",
      [
        input.id_user,
        input.id_vehicle,
        input.rentdate,
        input.returndate,
        input.total,
      ],
      callback
    );

    logger.info(
      sql,
      [{ time }, { input }]
    );
  } catch (err) {
    logger.error(err, time);
    db.rollback();
    logger.info("Rollback successful", [{ time }, { err }]);
  }
},

delete: async(id, callback) => {
  try{
    await db.query('UPDATE rental SET deleted_rental = 1, deleted_rental_at = (SELECT current_timestamp()) WHERE idrental = ?', [id], callback);

    logger.info('UPDATE rental SET deleted_rental = 1, deleted_rental_at = (SELECT current_timestamp()) WHERE idrental = ?', [{time}, {id}])
  }
  catch(err) {
    logger.error(err, time);
    db.rollback();
    logger.info("Rollback successful", [{ time }, { err }]);
  }
},

returnvehicle: async (id, callback) => {
  try {
    await db.query('UPDATE rental SET state = 1, return_at = (SELECT current_timestamp()) WHERE idrental = ?', [id], callback);
    logger.info('UPDATE rental SET state = 1, return_at = (SELECT current_timestamp()) WHERE idrental = ?', [{time}, {id}]);
  } 
  catch(err) {
    logger.error(err);
    db.rollback();
    logger.info("Rollback successful", [{time}, {err}]);
  }
},


};


module.exports = Rental;
