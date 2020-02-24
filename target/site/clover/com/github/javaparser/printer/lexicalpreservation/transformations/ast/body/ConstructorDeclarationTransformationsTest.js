var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":125,"id":60910,"methods":[{"el":47,"sc":5,"sl":44},{"el":56,"sc":5,"sl":51},{"el":67,"sc":5,"sl":62},{"el":74,"sc":5,"sl":69},{"el":81,"sc":5,"sl":76},{"el":90,"sc":5,"sl":85},{"el":97,"sc":5,"sl":92},{"el":104,"sc":5,"sl":99},{"el":111,"sc":5,"sl":106},{"el":118,"sc":5,"sl":113}],"name":"ConstructorDeclarationTransformationsTest","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1121":{"methods":[{"sl":44},{"sl":113}],"name":"replacingOnlyParameter","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":115},{"sl":116},{"sl":117}]},"test_1154":{"methods":[{"sl":44},{"sl":51}],"name":"settingName","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":53},{"sl":54},{"sl":55}]},"test_1184":{"methods":[{"sl":44},{"sl":69}],"name":"removingModifiers","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":71},{"sl":72},{"sl":73}]},"test_1228":{"methods":[{"sl":44},{"sl":76}],"name":"replacingModifiers","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":78},{"sl":79},{"sl":80}]},"test_1341":{"methods":[{"sl":44},{"sl":85}],"name":"addingParameters","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":87},{"sl":88},{"sl":89}]},"test_1349":{"methods":[{"sl":44},{"sl":106}],"name":"removingLastParameterOfMany","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":108},{"sl":109},{"sl":110}]},"test_1739":{"methods":[{"sl":44},{"sl":62}],"name":"addingModifiers","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":64},{"sl":65},{"sl":66}]},"test_1779":{"methods":[{"sl":44},{"sl":92}],"name":"removingOnlyParameter","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":94},{"sl":95},{"sl":96}]},"test_1852":{"methods":[{"sl":44},{"sl":99}],"name":"removingFirstParameterOfMany","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":101},{"sl":102},{"sl":103}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1184, 1341, 1228, 1739, 1852, 1121, 1154, 1349, 1779], [1184, 1341, 1228, 1739, 1852, 1121, 1154, 1349, 1779], [1184, 1341, 1228, 1739, 1852, 1121, 1154, 1349, 1779], [], [], [], [], [1154], [], [1154], [1154], [1154], [], [], [], [], [], [], [1739], [], [1739], [1739], [1739], [], [], [1184], [], [1184], [1184], [1184], [], [], [1228], [], [1228], [1228], [1228], [], [], [], [], [1341], [], [1341], [1341], [1341], [], [], [1779], [], [1779], [1779], [1779], [], [], [1852], [], [1852], [1852], [1852], [], [], [1349], [], [1349], [1349], [1349], [], [], [1121], [], [1121], [1121], [1121], [], [], [], [], [], [], [], []]
