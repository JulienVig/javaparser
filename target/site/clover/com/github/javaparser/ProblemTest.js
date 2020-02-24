var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":52,"id":22638,"methods":[{"el":37,"sc":5,"sl":30},{"el":44,"sc":5,"sl":39},{"el":51,"sc":5,"sl":46}],"name":"ProblemTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1061":{"methods":[{"sl":30}],"name":"testSimpleGetters","pass":true,"statements":[{"sl":32},{"sl":34},{"sl":35},{"sl":36}]},"test_1417":{"methods":[{"sl":46}],"name":"testVerboseMessageWithoutLocation","pass":true,"statements":[{"sl":48},{"sl":50}]},"test_1842":{"methods":[{"sl":39}],"name":"testVerboseMessage","pass":true,"statements":[{"sl":41},{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1061], [], [1061], [], [1061], [1061], [1061], [], [], [1842], [], [1842], [], [1842], [], [], [1417], [], [1417], [], [1417], [], []]
