var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":54789,"methods":[{"el":48,"sc":5,"sl":42}],"name":"Java9Validator","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":42}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47}]},"test_1665":{"methods":[{"sl":42}],"name":"issue1003","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47}]},"test_324":{"methods":[{"sl":42}],"name":"issue1482","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [124, 502, 687, 1067, 166, 652, 826, 4, 204, 840, 97, 183, 1464, 1730, 649, 629, 28, 377, 1141, 1903, 403, 1263, 170, 1039, 1577, 272, 485, 101, 1002, 1458, 306, 575, 360, 1398, 1102, 421, 1276, 1488, 174, 669, 698, 289, 1919, 432, 1585], [], [], [], [], [], [], [1158, 324, 1665], [1158, 324, 1665], [1158, 324, 1665], [1158, 324, 1665], [1158, 324, 1665], [1158, 324, 1665], [], []]
