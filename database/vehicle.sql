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


--add value vehicle

INSERT INTO `vehicle` (`id_vehicle`, `name_vehicle`, `license_plate`, `category`, `rent_price`, `manufacture_year`, `numb_regist`, `numb_manage`, `status`, `color`, `price`, `image`, `created_at`) VALUES
(1, 'Honda Vision ', '86C174130', 'Xe ga', '300000', '2021', '111', '1234', 'Trống', 'black-red', '39500000', 'vision.png', '2022-02-10 03:53:57'),
(2, 'Honda Vision', '70B345689', 'Xe ga', '200000', '2018', '121', '1111', 'Đã thuê', 'Grey', '37500000', 'vision.png', '2022-02-10 03:53:57'),
(3, 'Honda Lead', '68D252485', 'Xe ga', '300000', '2018', '122', '1264', 'Đang sửa chữa', 'White', '39000000', 'lead.png', '2022-02-10 03:53:57'),
(4, 'Honda Wave RSX', '72C156489', 'Xe số', '150000', '2021', '113', '1534', 'Đã thuê', 'black-blue', '24500000', 'RSX.png', '2022-02-10 03:53:57'),
(5, 'Honda Wave Alpha', '86C174580', 'Xe số', '100000', '2019', '11111', '12314', 'Đang sửa chữa', 'white', '21500000', 'alpha.png', '2022-02-10 03:53:57');