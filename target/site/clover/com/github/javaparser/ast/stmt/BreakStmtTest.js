var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":27174,"methods":[{"el":35,"sc":5,"sl":31},{"el":41,"sc":5,"sl":37}],"name":"BreakStmtTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1087":{"methods":[{"sl":37}],"name":"breakWithLabel","pass":true,"statements":[{"sl":39},{"sl":40}]},"test_1736":{"methods":[{"sl":31}],"name":"simpleBreak","pass":true,"statements":[{"sl":33},{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1736], [], [1736], [1736], [], [], [1087], [], [1087], [1087], [], []]
