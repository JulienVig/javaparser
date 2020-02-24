var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":32178,"methods":[{"el":38,"sc":5,"sl":34},{"el":47,"sc":5,"sl":43}],"name":"NodeWithBody","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1117":{"methods":[{"sl":43}],"name":"simpleStatementIsNotEmpty","pass":true,"statements":[{"sl":44},{"sl":45}]},"test_1226":{"methods":[{"sl":43}],"name":"emptyStatementIsEmpty","pass":true,"statements":[{"sl":44},{"sl":45}]},"test_1256":{"methods":[{"sl":43}],"name":"emptyBlockIsEmpty","pass":true,"statements":[{"sl":44},{"sl":45}]},"test_1291":{"methods":[{"sl":43}],"name":"nonEmptyBlockIsNotEmpty","pass":true,"statements":[{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1117, 1256, 1291, 1226], [1117, 1256, 1291, 1226], [1117, 1256, 1291, 1226], [], [], [], []]
