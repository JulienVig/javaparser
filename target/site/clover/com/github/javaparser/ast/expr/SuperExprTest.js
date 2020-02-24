var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":54,"id":58984,"methods":[{"el":35,"sc":5,"sl":32},{"el":44,"sc":5,"sl":37},{"el":53,"sc":5,"sl":46}],"name":"SuperExprTest","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1076":{"methods":[{"sl":46}],"name":"multiScopeSuper","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":52}]},"test_1492":{"methods":[{"sl":37}],"name":"singleScopeSuper","pass":true,"statements":[{"sl":39},{"sl":41},{"sl":43}]},"test_1557":{"methods":[{"sl":32}],"name":"justSuper","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1557], [], [1557], [], [], [1492], [], [1492], [], [1492], [], [1492], [], [], [1076], [], [1076], [], [1076], [], [1076], [], []]
