var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":41683,"methods":[{"el":36,"sc":5,"sl":34}],"name":"MethodAmbiguityException","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_260":{"methods":[{"sl":34}],"name":"solveMethodWithAmbiguosCall","pass":true,"statements":[{"sl":35}]},"test_867":{"methods":[{"sl":34}],"name":"solveMethodAsUsageWithAmbiguosCall","pass":true,"statements":[{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [867, 260], [867, 260], [], [], []]
