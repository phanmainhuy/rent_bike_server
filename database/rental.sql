CREATE TABLE rental(
    idrental int PRIMARY KEY AUTO_INCREMENT,
    id_user int,
    id_vehicle int,
    rentdate datetime,
    returndate datetime,
 	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state bit(1) NOT NULL,
    total double,
    return_at datetime,
    deleted_rental bit(1) NOT NULL,
    deleted_rental_at DATETIME NOT NULL,
    last_update_at DATETIME  NOT NULL on UPDATE current_timestamp()
)ENGINE=INNODB;
ALTER TABLE `rental` ADD FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `rental` ADD FOREIGN KEY (`id_vehicle`) REFERENCES `vehicle`(`id_vehicle`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO `rental`(`id_user`, `id_vehicle`, `rentdate`, `returndate`, `state`, `total`) VALUES 
('1','1','2022-02-23','2022-02-26', 1, 999999),
('3','2','2022-02-23','2022-02-26', 1, 999999);