
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `mobile` varchar(12) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `cmnd` varchar(13) DEFAULT NULL,
  `national` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` bit(1) NOT NULL,
  `deleted_at` datetime NOT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `user` (`name`, `mobile`, `email`, `password`, `birthday`, `gender`, `address`,`cmnd`, `national`, `avatar`) VALUES
('Phan Mai Nhu Y', '0948462040', 'baotiantu@gmail.com', '123456', '2000-11-05', 'Female', 'Phu Nhuan','215935846', 'VN', 'avatar.png'),
('Ngo Nguyen Linh Hao', '0379059969', 'haonguyenngo.86@gmail.com', '123456', '2000-08-22', 'Female', 'Quan 9','215935846', 'VN', 'hacker.png'),
('Le Thi Thanh Lam', '0123456789', 'thanhlam@gmail.com', 'lam123', '1999-08-24', 'Female', 'TP.Da Nang','215935846', 'VN', 'boy.png'),
('Ngo Thanh Hai', '0123456781', 'hai@gmail.com', '123456', '2001-02-14', 'Male', 'Phu Nhuan','215935846', 'VN', 'programmer.png'),
('Tran Thi My Tram', '0988126849', 'tramtran@gmail.com', '111111', '2000-10-27', 'Female', 'Thu Duc', '215935846', 'VN','magician.png'),
('Tran Quoc Toan', '0328513283', 'quoctoan@gmail.com', 'toan123', '2000-05-23', 'Male', 'Quan Binh Tan, TP.HCM','215935846', 'VN', 'boy.png'),
('Do Thanh Phuong', '0902873146', 'thanhphuong@gmail.com', 'phuong123', '2000-06-26', 'Female', 'Quang Trung, quan Go Vap, TP.HCM','215935846',  'VN','magician.png'),
('Dinh Truong Nguyen Khoi', '0948464786', 'nguyenkhoi@gmail.com', 'khoi123', '2000-12-25', 'Male', 'Quan 7, TP.HCM', '215935846', 'VN','young-man.png'),
('Nguyen Thi My Tam', '0123456777', 'mytam@gmail.com', 'tam123', '2000-10-21', 'Female', '117 Tân Kỳ Tân Quý, phường Tân Sơn Nhì, Quận Tân Phú, TP.HCM', '215935846', 'VN', 'delivery-boy.png'),
('Nguyen Le Thanh', '0948462040', 'thanhlenguyen@gmail.com', '0399824755', '1982-10-18', 'Female', 'Phu Yen', '215935846', 'VN', 'programmer.png'),
('Phan Mai Nhu Y', '0948462040', 'baotiantu@gmail.com', '123456', '2000-11-05', 'Female', 'Phu Nhuan','215935846', 'VN', '.png'),
('Ngo Nguyen Linh Hao', '0379059969', 'haonguyenngo.86@gmail.com', '123456', '2000-08-22', 'Female', 'Quan 9','215935846', 'VN', 'user1.png'),
('Le Thi Thanh Lam', '0123456789', 'thanhlam@gmail.com', 'lam123', '1999-08-24', 'Female', 'TP.Da Nang','215935846', 'VN', 'magician.png'),
('Ngo Thanh Hai', '0123456781', 'hai@gmail.com', '123456', '2001-02-14', 'Male', 'Phu Nhuan','215935846', 'VN', 'young-man.png'),
('Tran Thi My Tram', '0988126849', 'tramtran@gmail.com', '111111', '2000-10-27', 'Female', 'Thu Duc', '215935846', 'VN','magician.png'),
('Tran Quoc Toan', '0328513283', 'quoctoan@gmail.com', 'toan123', '2000-05-23', 'Male', 'Quan Binh Tan, TP.HCM','215935846', 'VN', 'boy.png'),
('Do Thanh Phuong', '0902873146', 'thanhphuong@gmail.com', 'phuong123', '2000-06-26', 'Female', 'Quang Trung, quan Go Vap, TP.HCM','215935846',  'VN','profile.png'),
('Dinh Truong Nguyen Khoi', '0948464786', 'nguyenkhoi@gmail.com', 'khoi123', '2000-12-25', 'Male', 'Quan 7, TP.HCM', '215935846', 'VN','programmer.png'),
('Nguyen Thi My Tam', '0123456777', 'mytam@gmail.com', 'tam123', '2000-10-21', 'Female', '117 Tân Kỳ Tân Quý, phường Tân Sơn Nhì, Quận Tân Phú, TP.HCM', '215935846', 'VN', 'magician.png'),
('Nguyen Le Thanh', '0948462040', 'thanhlenguyen@gmail.com', '0399824755', '1982-10-18', 'Female', 'Phu Yen', '215935846', 'VN', 'young-man.png'),
('Phan Mai Nhu Y', '0948462040', 'baotiantu@gmail.com', '123456', '2000-11-05', 'Female', 'Phu Nhuan','215935846', 'VN', 'phanmainhuy.png'),
('Ngo Nguyen Linh Hao', '0379059969', 'haonguyenngo.86@gmail.com', '123456', '2000-08-22', 'Female', 'Quan 9','215935846', 'VN', 'user1.png'),
('Le Thi Thanh Lam', '0123456789', 'thanhlam@gmail.com', 'lam123', '1999-08-24', 'Female', 'TP.Da Nang','215935846', 'VN', 'girl.png'),
('Ngo Thanh Hai', '0123456781', 'hai@gmail.com', '123456', '2001-02-14', 'Male', 'Phu Nhuan','215935846', 'VN', 'boy.png'),
('Tran Thi My Tram', '0988126849', 'tramtran@gmail.com', '111111', '2000-10-27', 'Female', 'Thu Duc', '215935846', 'VN','programmer.png'),
('Tran Quoc Toan', '0328513283', 'quoctoan@gmail.com', 'toan123', '2000-05-23', 'Male', 'Quan Binh Tan, TP.HCM','215935846', 'VN', 'user2.png'),
('Do Thanh Phuong', '0902873146', 'thanhphuong@gmail.com', 'phuong123', '2000-06-26', 'Female', 'Quang Trung, quan Go Vap, TP.HCM','215935846',  'VN','profile.png'),
('Dinh Truong Nguyen Khoi', '0948464786', 'nguyenkhoi@gmail.com', 'khoi123', '2000-12-25', 'Male', 'Quan 7, TP.HCM', '215935846', 'VN', 'young-man.png'),
('Nguyen Thi My Tam', '0123456777', 'mytam@gmail.com', 'tam123', '2000-10-21', 'Female', '117 Tân Kỳ Tân Quý, phường Tân Sơn Nhì, Quận Tân Phú, TP.HCM', '215935846', 'VN', 'avatar.png'),
('Nguyen Le Thanh', '0948462040', 'thanhlenguyen@gmail.com', '0399824755', '1982-10-18', 'Female', 'Phu Yen', '215935846', 'VN', 'user2.png');


CREATE TABLE `vehicle` (
  `id_vehicle` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name_vehicle` varchar(150) NOT NULL,
  `license_plate` varchar(50) NOT NULL,
  `number` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `rent_price` double NOT NULL,
  `manufacture_year` varchar(50) NOT NULL,
  `numb_regist` varchar(50) NOT NULL,
  `numb_manage` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `vehicle` (`id_vehicle`, `name_vehicle`, `license_plate`, `category`, `rent_price`, `manufacture_year`, `numb_regist`, `numb_manage`, `status`, `color`, `price`, `image`, `created_at`) VALUES
(1, 'Honda Vision ', '86C174130', 'Xe ga', '300000', '2021', '111', '1234', 'Trống', 'black-red', '39500000', 'vision.png', '2022-02-10 03:53:57'),
(2, 'Honda Vision', '70B345689', 'Xe ga', '200000', '2018', '121', '1111', 'Đã thuê', 'Grey', '37500000', 'vision.png', '2022-02-10 03:53:57'),
(3, 'Honda Lead', '68D252485', 'Xe ga', '300000', '2018', '122', '1264', 'Đang sửa chữa', 'White', '39000000', 'lead.png', '2022-02-10 03:53:57'),
(4, 'Honda Wave RSX', '72C156489', 'Xe số', '150000', '2021', '113', '1534', 'Đã thuê', 'black-blue', '24500000', 'RSX.png', '2022-02-10 03:53:57'),
(5, 'Honda Wave Alpha', '86C174580', 'Xe số', '100000', '2019', '11111', '12314', 'Đang sửa chữa', 'white', '21500000', 'alpha.png', '2022-02-10 03:53:57');

CREATE TABLE rental(
    idrental int PRIMARY KEY AUTO_INCREMENT,
    id_user int,
    id_vehicle int,
    rentdate datetime,
    returndate datetime,
 	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state bit(1) NOT NULL,
    deleted_rental bit(1) NOT NULL,
    deleted_rental_at DATETIME NOT NULL,
    last_update_at DATETIME  NOT NULL on UPDATE current_timestamp()
)ENGINE=INNODB;
ALTER TABLE `rental` ADD FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `rental` ADD FOREIGN KEY (`id_vehicle`) REFERENCES `vehicle`(`id_vehicle`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO `rental`(`id_user`, `id_vehicle`, `rentdate`, `returndate`, `state`) VALUES 
('1','1','2022-02-23','2022-02-26', 1),
('3','2','2022-02-23','2022-02-26', 1)