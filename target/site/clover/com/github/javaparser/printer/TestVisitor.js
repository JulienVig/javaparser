var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":36,"id":40001,"methods":[{"el":30,"sc":5,"sl":28},{"el":35,"sc":5,"sl":32}],"name":"TestVisitor","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1097":{"methods":[{"sl":28},{"sl":32}],"name":"printUseTestVisitor","pass":true,"statements":[{"sl":29},{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1097], [1097], [], [], [1097], [], [1097], [], []]
