var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":99,"id":14273,"methods":[{"el":59,"sc":5,"sl":49},{"el":67,"sc":5,"sl":61},{"el":76,"sc":5,"sl":69},{"el":85,"sc":5,"sl":78},{"el":93,"sc":5,"sl":87},{"el":98,"sc":5,"sl":95}],"name":"SymbolSolverTest","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":95}],"name":"testSolvePackageLocalClass","pass":true,"statements":[{"sl":97}]},"test_131":{"methods":[{"sl":87}],"name":"testSolveSymbolToInheritedPrivateField","pass":true,"statements":[{"sl":89},{"sl":91},{"sl":92}]},"test_666":{"methods":[{"sl":61}],"name":"testSolveSymbolUnexisting","pass":true,"statements":[{"sl":63},{"sl":65},{"sl":66}]},"test_77":{"methods":[{"sl":78}],"name":"testSolveSymbolToInheritedPublicField","pass":true,"statements":[{"sl":80},{"sl":82},{"sl":83},{"sl":84}]},"test_820":{"methods":[{"sl":69}],"name":"testSolveSymbolToDeclaredField","pass":true,"statements":[{"sl":71},{"sl":73},{"sl":74},{"sl":75}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [666], [], [666], [], [666], [666], [], [], [820], [], [820], [], [820], [820], [820], [], [], [77], [], [77], [], [77], [77], [77], [], [], [131], [], [131], [], [131], [131], [], [], [106], [], [106], [], []]
