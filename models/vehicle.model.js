const logger = require("../logs/loggers");
const time = require("../logs/realtime");
const db = require("../config/connect")();

const Vehicle = {
    //get all
    all: async(callback) => {
        try {
            // await db.query('SELECT * FROM vehicle where color = "Grey" ORDER BY `id_vehicle` desc', callback)
            await db.query('SELECT * FROM vehicle ORDER BY `id_vehicle` desc', callback)
            logger.info('Select*from vehicle', { time });
        } catch (err) {
            logger.error(err);
        }
    },

    //get vehicle "Trong"
    getStatusEmpty: async(callback) => {
        try {
            // await db.query('SELECT * FROM vehicle where color = "Grey" ORDER BY `id_vehicle` desc', callback)
            await db.query('SELECT * FROM vehicle where status ="Trống" ORDER BY `id_vehicle` desc', callback)
            logger.info('SELECT * FROM vehicle where status ="Trống" ORDER BY `id_vehicle` desc', { time });
        } catch (err) {
            logger.error(err);
        }
    },

    //get vehicle "Da thue"
    getStatusRented: async(callback) => {
        try {
            // await db.query('SELECT * FROM vehicle where color = "Grey" ORDER BY `id_vehicle` desc', callback)
            await db.query('SELECT * FROM vehicle where status ="Đã thuê" ORDER BY `id_vehicle` desc', callback)
            logger.info('SELECT * FROM vehicle where status ="Đã thuê" ORDER BY `id_vehicle` desc', { time });
        } catch (err) {
            logger.error(err);
        }
    },

      //get vehicle "Da sua chua"
      getStatusRepairing: async(callback) => {
        try {
            // await db.query('SELECT * FROM vehicle where color = "Grey" ORDER BY `id_vehicle` desc', callback)
            await db.query('SELECT * FROM vehicle where status ="Đang sửa chữa" ORDER BY `id_vehicle` desc', callback)
            logger.info('Select*from vehicle', { time });
        } catch (err) {
            logger.error(err);
        }
    },

    // //find by id
    find: async(id, callback) => {
        try {
            await db.query('SELECT * FROM vehicle Where id_vehicle = ? ORDER BY `id_vehicle` ASC', [id], callback)


            logger.info('find', [{ time }, { id }]);
        } catch (err) {
            logger.error(err, time);
        }
    },


    search: async(search, callback) => {
        try {
            await db.query('SELECT  * FROM vehicle WHERE name LIKE "%"?"%" OR rent_price LIKE "%"?"%" OR license_plate LIKE "%"?"%" OR category LIKE "%"?"%" ORDER BY `name` ASC', [search, search, search, search], callback)
            logger.info('SELECT  * FROM vehicle WHERE name LIKE "%"?"%" OR rent_price LIKE "%"?"%" OR license_plate LIKE "%"?"%" OR category LIKE "%"?"%" ORDER BY `name` ASC', [{ search }, { time }])

        } catch (err) {
            logger.error(err, time);
        }
    },  

    getbynumber: async(numb, callback) => {
        try{
            await db.query('SELECT * FROM vehicle WHERE license_plate = ? ', [numb], callback);
            logger.info('SELECT * FROM vehicle WHERE license_plate = ? ', time)
        }
        catch (err){
            logger.error(err, time);
        }
    },

    getbynumbregist: async(numb, callback) => {
        try{
            await db.query('SELECT * FROM vehicle WHERE numb_regist = ? ', [numb], callback);
            logger.info('SELECT * FROM vehicle WHERE numb_regist = ? ', [time])
        }
        catch (err){
            logger.error(err, time);
        }
    },

    //update rented vehicle
    updaterentedstatus: async (id, callback) => {
        try{
            await db.query('UPDATE vehicle SET status = "Đã thuê" WHERE id_vehicle = ? ', [id], callback);
        }
        catch (err){
            logger.error(err, time);
        }
    },

    //update empty vehicle
    updateEmptystatus: async (id, callback) => {
        try{
            await db.query('UPDATE vehicle SET status = "Trống" WHERE id_vehicle = ? ', [id], callback);
            logger.info('UPDATE vehicle SET status = "Trống" WHERE id_vehicle = ? ', [{id}, {time}])
        }
        catch (err){
            logger.error(err, time);
        }
    },

    //update reparing vehicle
    updatereparingstatus: async (id, callback) => {
        try{
            await db.query('UPDATE vehicle SET status = "Đang sửa chữa" WHERE id_vehicle = ? ', [id], callback);
        }
        catch (err){
            logger.error(err, time);
        }
    },
    
    //create
    create: async(input, callback) => {
        try {
            await db.query(
                "INSERT INTO vehicle (name_vehicle, license_plate, category, rent_price, manufacture_year, numb_regist, numb_manage, status, color, price, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    input.name,
                    input.license_plate,
                    input.category,
                    input.rent_price,
                    input.manufacture_year,
                    input.numb_regist,
                    input.numb_manage,
                    input.status,
                    input.color,
                    input.price,
                    input.image

                ],
                callback
            );

            logger.info(
                "INSERT INTO vehicle (name, license_plate, category, rent_price, manufacture_year, numb_regist, numb_manage, status, color, price, image) VALUES ", [{ time }, { input }]
            );
        } catch (err) {
            logger.error(err, time);
            db.rollback();
            logger.info("Rollback successful", [{ time }]);
        }
    },

    // destroy: async(id, callback) => {
    //     try {
    //         await db.query(
    //             `UPDATE vehicle SET deleted = 1, deleted_at = (SELECT current_timestamp()) WHERE id_vehicle = ? `, [id],
    //             callback
    //         );
    //         logger.info(
    //             `UPDATE vehicle SET deleted = 1, deleted_at = "${datetime} ${time}" WHERE id_vehicle = ? `, [{ time }, { id }]
    //         );
    //     } catch (err) {
    //         logger.error("Error delete", [{ time }, { err }]);
    //         db.rollback();
    //         logger.info("Rollback successful", [{ time }]);
    //     }
    // },


    update: async(input, callback) => {
        try {
            await db.query(
                "UPDATE vehicle SET name =?, license_plate =?, category = ?, rent_price = ?, manufacture_year = ?, numb_regist = ?, numb_manage = ?, status =?, color =?, price=? WHERE id_vehicle = ?", [
                    input.name,
                    input.license_plate,
                    input.category,
                    input.rent_price,
                    input.manufacture_year,
                    input.numb_regist,
                    input.numb_manage,
                    input.status,
                    input.color,
                    input.price,
                    input.id,
                ],
                callback
            );
            logger.info(
                "UPDATE vehicle SET name =?, license_plate =?, category = ?, rent_price = ?, manufacture_year = ?, numb_regist = ?, numb_manage = ?, status =?, color =?, price=? WHERE id_vehicle = ? ", [{ time }, { input }]
            );
        } catch (err) {
            logger.error("Error update", [err]);
            db.rollback();
            logger.info("Rollback successful", [{ time }]);
        }
    },
    // image
    setimage: async(input, callback) => {
        try {
            await db.query(
                "UPDATE vehicle SET image = ? WHERE id_vehicle = ? ", [input.image, input.id],
                callback
            );
            logger.info("UPDATE vehicle SET image = ? WHERE id_vehicle = ? ", [
                { time },
                { input },
            ]);
        } catch (err) {
            logger.error("Error Change image", [{ time }, { err }]);
            db.rollback();
            logger.info("Rollback successful", [{ time }]);
        }
    },

};

module.exports = Vehicle;