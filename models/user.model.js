const logger = require("../logs/loggers");
const time = require("../logs/realtime");
const datetime = require("../logs/daytime");
const db = require("../config/connect")();

const User = {
    //get all
    all: async(callback) => {
        try {
            await db.query(
                "SELECT * FROM user Where deleted = 0 ORDER BY `id_user` desc",
                callback
            );
            logger.info("Select*from user", { time });
        } catch (err) {
            logger.error(err);
        }
    },

    //find user by id
    find: async(id, callback) => {
        try {
            await db.query(
                "SELECT * FROM user Where id_user = ? AND deleted = 0  ORDER BY `id_user` ASC", [id],
                callback
            );

            logger.info("Select*from user where id_user = ", [{ time }, { id }]);
        } catch (err) {
            logger.error(err, time);
        }
    },
    // findbymobile: async(mobile, callback) => {
    //     try {
    //         await db.query(
    //             'SELECT * FROM user Where mobile = ? AND deleted = 0  ORDER BY `id_user` ASC', mobile,
    //             callback
    //         );

    //         logger.info("SELECT * FROM user Where mobile = ? AND deleted = 0  ORDER BY `id_user` ASC", [{ time }, { mobile }]);
    //     } catch (err) {
    //         logger.error(err, time);
    //     }
    // },

    //example search like
    searchname: async(nam, callback) => {
        try {
            await db.query(
                'SELECT *FROM user WHERE name like "%"?"%" AND deleted = 0 ORDER BY `id_user` ASC',
                nam,
                callback
            );

            logger.info('SELECT  * FROM user WHERE name like "%"?"%"', [
                { time },
                { nam },
            ]);
        } catch (err) {
            logger.error(err, time);
        }
    },
    findbymobile: async(mobile, callback) => {
        try {
            await db.query(
                'SELECT *FROM user WHERE mobile = ? AND deleted = 0 ORDER BY `id_user` ASC',
                mobile,
                callback
            );

            logger.info('SELECT *FROM user WHERE mobile = ? AND deleted = 0 ORDER BY `id_user` ASC', [
                { time },
                { mobile },
            ]);
        } catch (err) {
            logger.error(err, time);
        }
    },

    search: async(search, callback) => {
        try {
            await db.query(
                'SELECT  * FROM user WHERE name LIKE "%"?"%" OR mobile LIKE "%"?"%" OR email LIKE "%"?"%" OR cmnd LIKE "%"?"%" AND deleted = 0 ORDER BY `id_user` ASC', [search, search, search, search],
                callback
            );
            logger.info(
                'SELECT  * FROM user WHERE name LIKE "%"?"%" OR mobile LIKE "%"?"%" OR email LIKE "%"?"%" OR cmnd LIKE "%"?"%"', [{ search }, { time }]
            );
        } catch (err) {
            logger.error(err, time);
        }
    },

    login: async(email, password, callback) => {
        try {
            await db.query(
                "SELECT id_user FROM user WHERE email = ? AND password = ? AND deleted = 0 ORDER BY `id_user` ASC", [email, password],
                callback
            );
            logger.info("SELECT id_user FROM user WHERE email =  AND password = ", [
                { time },
                { email },
                { password },
            ]);
        } catch (err) {
            logger.error(err, time);
        }
    },

    //create a user
    create: async(input, callback) => {
        try {
            await db.query(
                "INSERT INTO user (name, mobile, email, password, birthday, gender, address, cmnd, national, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    input.name,
                    input.mobile,
                    input.email,
                    input.password,
                    input.birthday,
                    input.gender,
                    input.address,
                    input.cmnd,
                    input.national,
                    input.avatar,
                ],
                callback
            );

            logger.info(
                "INSERT INTO user (name, mobile, email, password, birthday, gender, address, cmnd, national, avatar) VALUES ", [{ time }, { input }]
            );
        } catch (err) {
            logger.error(err, time);
            db.rollback();
            logger.info("Rollback successful", [{ time }, { err }]);
        }
    },

    //delete a user by id
    // destroy: async(id, callback) =>{
    //     try{
    //         await db.query('DELETE FROM user WHERE id_user =?', [id], callback);
    //         logger.info('DELETE FROM user WHERE id_user = ',[{time} ,{id}]);
    //     }
    //     catch(err){
    //         logger.error(err);
    //         db.rollback();
    //         logger.info("Rollback successful", [{time}, {err}]);
    //     }
    // },
    destroy: async(id, callback) => {
        try {
            await db.query(
                `UPDATE user SET deleted = 1, deleted_at = (SELECT current_timestamp()) WHERE id_user = ? `, [id],
                callback
            );
            logger.info(
                `UPDATE user SET deleted = 1, deleted_at = "${datetime} ${time}" WHERE id_user = ? `, [{ time }, { id }]
            );
        } catch (err) {
            logger.error("Error delete", [{ time }, { err }]);
            db.rollback();
            logger.info("Rollback successful", [{ time }]);
        }
    },

  //(update a user)
  update: async (input, callback) => {
    try {
      await db.query(
        "UPDATE user SET name =?, mobile =?, email = ?, password = ?, birthday = ?, gender = ?, address = ?, cmnd =?, national =? WHERE id_user = ?",
        [
          input.name,
          input.mobile,
          input.email,
          input.password,
          input.birthday,
          input.gender,
          input.address,
          input.cmnd,
          input.national,
          // input.avatar,
          input.id,
        ],
        callback
      );
      logger.info(
        "UPDATE user SET name =?, mobile =?, email = ?, password = ?, birthday = ?, gender = ?, address = ?, cmnd =?, national =? WHERE id_user = ? ",
        [{ time }, { input }]
      );
    } catch (err) {
      logger.error("Error update", [err]);
      db.rollback();
      logger.info("Rollback successful", [{ time }]);
    }
  },
  // image
  setavatar: async (input, callback) => {
    try {
      await db.query(
        "UPDATE user SET avatar = ? WHERE id_user = ? ",
        [input.avatar, input.id],
        callback
      );
      logger.info("UPDATE user SET avatar = ? WHERE id_user = ? ", 
      [ { time },
        { input },
      ]);
    } catch (err) {
      logger.error("Error Change avatar", [{ time }, { err }]);
      db.rollback();
      logger.info("Rollback successful", [{ time }]);
    }
  },
    
    // image
    setavatar: async(input, callback) => {
        try {
            await db.query(
                "UPDATE user SET avatar = ? WHERE id_user = ? ", [input.avatar, input.id],
                callback
            );
            logger.info("UPDATE user SET avatar = ? WHERE id_user = ? ", [
                { time },
                { input },
            ]);
        } catch (err) {
            logger.error("Error Change avatar", [{ time }, { err }]);
            db.rollback();
            logger.info("Rollback successful", [{ time }]);
        }
    },

};

module.exports = User;