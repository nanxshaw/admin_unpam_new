/*
 Navicat Premium Data Transfer

 Source Server         : xampp
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : admin

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 01/07/2024 11:07:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_barang
-- ----------------------------
DROP TABLE IF EXISTS `tb_barang`;
CREATE TABLE `tb_barang`  (
  `id_brg` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama_brg` varchar(250) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `jenis` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `satuan` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `stok_awal` int NOT NULL,
  `harga` int NOT NULL,
  `input_date` datetime NOT NULL,
  `updater` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_brg`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_barang
-- ----------------------------
INSERT INTO `tb_barang` VALUES ('B0001', 'Indomie', 'J001', '06', 7800, 2600, '2024-07-01 04:53:30', 'admin');
INSERT INTO `tb_barang` VALUES ('B0002', 'POP MIE', 'J001', '07', 5000, 3000, '2024-07-01 04:53:24', 'admin');
INSERT INTO `tb_barang` VALUES ('B0003', 'Buku', 'J001', '03', 200, 20000, '2024-07-01 04:40:28', 'admin');
INSERT INTO `tb_barang` VALUES ('B0004', 'Kopi', 'J001', '07', 20000, 5000, '2024-07-01 04:53:16', 'admin');
INSERT INTO `tb_barang` VALUES ('B0005', 'produk test', 'J001', '07', 100, 187000, '2024-07-01 04:40:40', 'admin');
INSERT INTO `tb_barang` VALUES ('B0006', 'PERMEN YUPI', 'J002', '07', 1000, 1000, '2024-07-01 04:38:58', 'admin');

-- ----------------------------
-- Table structure for tb_jenis
-- ----------------------------
DROP TABLE IF EXISTS `tb_jenis`;
CREATE TABLE `tb_jenis`  (
  `id_jenis` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jenis` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `input_date` datetime NULL DEFAULT NULL,
  `updater` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_jenis
-- ----------------------------
INSERT INTO `tb_jenis` VALUES ('J001', 'ATK', '2024-07-01 02:26:36', 'admin');
INSERT INTO `tb_jenis` VALUES ('J002', 'MAKANAN', '2024-07-01 02:26:44', 'admin');
INSERT INTO `tb_jenis` VALUES ('J003', 'MINUMAN', '2024-07-01 02:26:54', 'admin');

-- ----------------------------
-- Table structure for tb_keluar
-- ----------------------------
DROP TABLE IF EXISTS `tb_keluar`;
CREATE TABLE `tb_keluar`  (
  `id_keluar` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tgl_keluar` date NULL DEFAULT NULL,
  `barang_id` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jml_keluar` int NULL DEFAULT NULL,
  `input_date` datetime NULL DEFAULT NULL,
  `updater` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_keluar
-- ----------------------------
INSERT INTO `tb_keluar` VALUES ('B-20240624-0002', '2024-06-24', 'B0002', 5, '2024-07-01 06:06:03', 'admin');
INSERT INTO `tb_keluar` VALUES ('B-20240624-0004', '2024-06-24', 'B0004', 25, '2024-07-01 06:06:06', 'admin');

-- ----------------------------
-- Table structure for tb_masuk
-- ----------------------------
DROP TABLE IF EXISTS `tb_masuk`;
CREATE TABLE `tb_masuk`  (
  `id_masuk` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tgl_masuk` date NULL DEFAULT NULL,
  `barang_id` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jml_masuk` int NULL DEFAULT NULL,
  `input_date` datetime NULL DEFAULT NULL,
  `updater` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_masuk
-- ----------------------------
INSERT INTO `tb_masuk` VALUES ('B-20240624-0001', '2024-06-24', 'B0004', 100, '2024-07-01 04:53:50', 'admin');
INSERT INTO `tb_masuk` VALUES ('B-20240624-0002', '2024-06-23', 'B0001', 50, '2024-07-01 04:53:45', 'admin');
INSERT INTO `tb_masuk` VALUES ('B-20240701-0003', '2024-07-23', 'B0002', 30, '2024-07-01 04:53:56', 'admin');

-- ----------------------------
-- Table structure for tb_satuan
-- ----------------------------
DROP TABLE IF EXISTS `tb_satuan`;
CREATE TABLE `tb_satuan`  (
  `id_satuan` char(2) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `satuan` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_satuan`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_satuan
-- ----------------------------
INSERT INTO `tb_satuan` VALUES ('01', 'Unit');
INSERT INTO `tb_satuan` VALUES ('02', 'Butir');
INSERT INTO `tb_satuan` VALUES ('03', 'Dus');
INSERT INTO `tb_satuan` VALUES ('04', 'Kg');
INSERT INTO `tb_satuan` VALUES ('05', 'Liter');
INSERT INTO `tb_satuan` VALUES ('06', 'Bungkus');
INSERT INTO `tb_satuan` VALUES ('07', 'Pcs');
INSERT INTO `tb_satuan` VALUES ('08', 'bhjbj');

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `users_id` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `username` varchar(60) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(60) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `status` int NOT NULL,
  `create_date` datetime NOT NULL,
  PRIMARY KEY (`users_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('1023', 'admin', 'admin', 'admin', 'admin@admin.com', '2024-05-01', 'Laki - Laki', '0000-00-00 00:00:00', 1, '2024-05-27 13:53:42');
INSERT INTO `tb_user` VALUES ('123', 'nanang', 'nanang', '', '', '0000-00-00', '', '0000-00-00 00:00:00', 1, '2024-05-27 13:53:52');
INSERT INTO `tb_user` VALUES ('123123', 'nanang', 'asd', '', '', '0000-00-00', '', '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00');
INSERT INTO `tb_user` VALUES ('123456', 'nanangtrin', 'admin', '', '', '0000-00-00', '', '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00');
INSERT INTO `tb_user` VALUES ('1239', 'zxc', 'zxc', '', '', '0000-00-00', '', '0000-00-00 00:00:00', 1, '2024-05-27 12:31:17');

SET FOREIGN_KEY_CHECKS = 1;
