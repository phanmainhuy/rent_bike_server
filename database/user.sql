
-- --update user
-- UPDATE user SET name = 'Tuan', mobile ='0123456789', email = 'tuan@gmail.com', password = 'tuan123', birthday = '2003-02-14', gender = 'Male', address = 'Binh Tan', cmnd ='215125846', national ='VN', NULL
-- WHERE id_user = 4

-- --delete user
-- DELETE FROM `user` WHERE id_user = 4


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
