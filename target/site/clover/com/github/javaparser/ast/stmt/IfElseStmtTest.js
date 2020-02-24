var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":27190,"methods":[{"el":38,"sc":5,"sl":32},{"el":46,"sc":5,"sl":40},{"el":54,"sc":5,"sl":48}],"name":"IfElseStmtTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1253":{"methods":[{"sl":48}],"name":"issue1247withElseSingleStmtWhichIsAnIf","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53}]},"test_1436":{"methods":[{"sl":32}],"name":"issue1247withElseSingleStmt","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_1604":{"methods":[{"sl":40}],"name":"issue1247withElseBlockStmt","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1436], [], [1436], [1436], [1436], [1436], [], [], [1604], [], [1604], [1604], [1604], [1604], [], [], [1253], [], [1253], [1253], [1253], [1253], [], [], []]
