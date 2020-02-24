var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":53,"id":54780,"methods":[{"el":52,"sc":5,"sl":44}],"name":"Java8Validator","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":44}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":34},{"sl":45},{"sl":46},{"sl":47},{"sl":48}]},"test_1665":{"methods":[{"sl":44}],"name":"issue1003","pass":true,"statements":[{"sl":34},{"sl":45},{"sl":46},{"sl":47},{"sl":48}]},"test_324":{"methods":[{"sl":44}],"name":"issue1482","pass":true,"statements":[{"sl":34},{"sl":45},{"sl":46},{"sl":47},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [3, 1231, 1543, 605, 1343, 792, 1832, 1867, 468, 841, 721, 1339, 154, 1348, 1255, 1002, 150, 1964, 1685, 68, 477, 1394, 958, 1828, 300, 563, 1268, 461, 45, 1957, 1640, 1318, 1576, 682, 1510, 398, 245, 1451, 1464, 1297, 368, 1437, 1587, 1680, 680, 538, 816, 1913, 1309, 1572, 195, 863, 52, 1513, 1935, 38, 1052, 1391, 198, 236, 7, 718, 1262, 170, 699, 1895, 180, 324, 1626, 213, 717, 1901, 670, 1319, 37, 55, 345, 1082, 153, 1661, 1610, 791, 1401, 1621, 99, 167, 1559, 1673, 424, 418, 642, 454, 1206, 421, 1146, 1361, 698, 1094, 741, 280, 263, 1615, 859, 1016, 515, 294, 451, 1210, 1647, 1897, 224, 261, 33, 429, 683, 286, 249, 1197, 467, 777, 1323, 1722, 656, 488, 1228, 1270, 339, 1617, 636, 1009, 202, 1368, 723, 163, 629, 1420, 258, 807, 476, 1852, 27, 88, 1358, 341, 770, 472, 858, 208, 696, 1277, 315, 1272, 67, 779, 411, 773, 378, 665, 1154, 1527, 577, 1689, 1838, 272, 135, 313, 550, 174, 574, 1959, 124, 1051, 4, 1811, 16, 137, 867, 34, 511, 1523, 487, 403, 1756, 1663, 1671, 1848, 532, 1315, 569, 62, 83, 557, 1522, 1220, 705, 42, 470, 209, 737, 144, 516, 646, 1005, 1230, 1659, 765, 584, 1054, 95, 788, 1912, 185, 524, 740, 140, 177, 302, 1726, 822, 293, 1805, 1847, 1692, 821, 583, 809, 772, 883, 316, 1284, 836, 1788, 360, 599, 447, 1014, 406, 1099, 217, 338, 966, 242, 1, 643, 1681, 183, 329, 522, 654, 402, 1097, 985, 1013, 1577, 598, 523, 758, 849, 128, 1939, 1017, 1855, 432, 1706, 335, 0, 182, 484, 785, 147, 871, 1759, 1820, 1915, 514, 1121, 1809, 720, 1296, 1403, 695, 707, 1911, 74, 1199, 1670, 59, 440, 1453, 1264, 1833, 428, 457, 420, 478, 1446, 446, 357, 435, 612, 1898, 192, 1422, 222, 693, 621, 975, 81, 306, 499, 872, 1130, 459, 591, 1602, 834, 162, 417, 132, 1841, 71, 439, 1175, 1125, 43, 1341, 496, 69, 702, 1179, 1423, 1646, 1605, 625, 1770, 373, 1219, 1542, 347, 392, 837, 1574, 221, 58, 1045, 1579, 1908, 689, 548, 840, 1393, 631, 1136, 114, 568, 736, 1769, 186, 445, 1346, 803, 1184, 1415, 1836, 1932, 307, 847, 1008, 422, 1333, 731, 860, 1520, 691, 1822, 1882, 1225, 431, 1305, 981, 1116, 453, 1036, 129, 804, 1192, 1705, 54, 362, 188, 356, 388, 582, 794, 397, 564, 1063, 1310, 1645, 573, 1304, 1766, 1424, 1064, 1896, 473, 879, 1480, 1666, 1406, 351, 1155, 1721, 463, 1059, 637, 1058, 1374, 275, 1741, 810, 1798, 1793, 321, 1221, 1504, 1172, 1366, 1929, 824, 73, 296, 318, 1364, 1509, 1889, 1010, 1881, 609, 65, 1320, 1826, 215, 377, 310, 645, 1753, 1026, 57, 121, 651, 1434, 812, 1378, 48, 1918, 535, 1539, 273, 1739, 963, 94, 1872, 753, 1794, 819, 1558, 1349, 687, 340, 105, 13, 1593, 1158, 259, 783, 480, 75, 89, 349, 1556, 31, 1725, 655, 537, 657, 566, 40, 219, 1114, 984, 410, 277, 1145, 782, 817, 924, 380, 126, 1900, 319, 1746, 1771, 1938, 134, 283, 455, 24, 1905, 1042, 1870, 1627, 1290, 350, 456, 960, 572, 314, 11, 1041, 728, 1444, 980, 1606, 1274, 1388, 852, 404, 1443, 601, 101, 1501, 18, 1679, 1845, 1885, 276, 430, 502, 1375, 790, 1354, 633, 441, 1247, 1772, 1178, 358, 212, 1830, 211, 260, 1235, 776, 825, 692, 1166, 1495, 1342, 1488, 1591, 1954, 1762, 193, 475, 1390, 1040, 641, 110, 268, 1914, 343, 764, 1408, 1859, 1924, 1656, 1252, 856, 797, 610, 830, 469, 965, 361, 449, 386, 247, 47, 579, 172, 141, 1665, 505, 578, 617, 289, 1469, 762, 288, 1280, 1710, 287, 160, 1240, 580, 253, 262, 308, 1555, 1781, 745, 1594, 26, 363, 240, 1383, 387, 490, 674, 543, 652, 427, 419, 1147, 1261, 1237, 155, 267, 1090, 1465, 407, 565, 743, 1799, 495, 190, 197, 1779, 1363, 271, 1167, 70, 1599, 603, 1514, 1597, 1454, 204, 1877, 1265, 375, 196, 175, 109, 156, 1139, 1693, 780, 854, 248, 701, 953, 284, 145, 669, 1624, 396, 479, 1608, 1345, 653, 237, 571, 384, 113, 497, 1334, 1019, 1216, 1888, 639, 823, 6, 76, 719, 465, 616, 1456, 49, 452, 1879, 1047, 1468, 32, 551, 1080, 1043, 241, 1238, 1944, 668, 1807, 201, 1758, 1152, 663, 1359, 1641, 1062, 1837, 1108, 608, 63, 100, 1353, 333, 1109, 53, 97, 1843, 504, 372, 838, 400, 416, 1324, 1463, 1600, 590, 383, 688, 471, 138, 1667, 1637, 161, 796, 252, 1655, 742, 747, 1907, 845, 176, 1824, 203, 774, 1734, 206, 125, 14, 408, 575, 1936, 1748, 1168, 297, 1526, 1419, 786, 1217, 1643, 139, 298, 1505, 1329, 1892, 1940, 1328, 1196, 512, 727, 679, 405, 96, 282, 1583, 102, 534, 627, 994, 1894, 1933, 320, 594, 1678, 311], [563, 1510, 1464, 1572, 52, 38, 1626, 213, 421, 698, 429, 1323, 339, 636, 629, 315, 411, 272, 124, 34, 705, 1054, 788, 140, 1805, 583, 316, 360, 217, 1577, 484, 785, 707, 1911, 457, 435, 81, 306, 417, 625, 373, 548, 840, 114, 445, 307, 1822, 129, 388, 582, 794, 397, 73, 296, 1881, 377, 535, 819, 687, 480, 410, 319, 456, 728, 1606, 1443, 101, 1501, 18, 502, 358, 212, 475, 343, 797, 610, 830, 289, 762, 288, 580, 240, 652, 603, 375, 196, 669, 384, 497, 823, 6, 76, 616, 1152, 333, 97, 504, 400, 206, 14, 575, 297, 96, 102, 594], [1464, 52, 38, 213, 421, 698, 1323, 339, 629, 411, 272, 124, 705, 788, 140, 360, 217, 1577, 707, 81, 306, 417, 625, 373, 548, 840, 114, 307, 129, 794, 397, 377, 535, 687, 480, 728, 101, 1501, 502, 358, 212, 797, 830, 289, 652, 603, 196, 669, 384, 6, 616, 1152, 333, 97, 575, 96, 594], [1152], [], [], [], [], [], [], [324, 1158, 1665], [324, 1158, 1665], [324, 1158, 1665], [324, 1158, 1665], [324, 1158, 1665], [], [], [], [], []]
