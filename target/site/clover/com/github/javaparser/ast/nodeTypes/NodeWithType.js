var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":78,"id":32504,"methods":[{"el":67,"sc":5,"sl":63},{"el":73,"sc":5,"sl":69},{"el":77,"sc":5,"sl":75}],"name":"NodeWithType","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1280":{"methods":[{"sl":69}],"name":"changingNonePrimitiveTypes","pass":true,"statements":[{"sl":71},{"sl":72}]},"test_1298":{"methods":[{"sl":63}],"name":"getElementTypeFailsOnDodgySetterUsage","pass":true,"statements":[{"sl":65},{"sl":66}]},"test_1480":{"methods":[{"sl":69}],"name":"changingTypes","pass":true,"statements":[{"sl":71},{"sl":72}]},"test_1481":{"methods":[{"sl":63}],"name":"getCommonTypeFailsOnDodgySetterUsage","pass":true,"statements":[{"sl":65},{"sl":66}]},"test_1844":{"methods":[{"sl":69}],"name":"changingType","pass":true,"statements":[{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1481, 1298], [], [1481, 1298], [1481, 1298], [], [], [1844, 1480, 1280], [], [1844, 1480, 1280], [1844, 1480, 1280], [], [], [], [], [], []]
