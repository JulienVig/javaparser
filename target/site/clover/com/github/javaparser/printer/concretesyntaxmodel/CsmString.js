var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":47,"id":53905,"methods":[{"el":33,"sc":5,"sl":31},{"el":40,"sc":5,"sl":35},{"el":45,"sc":5,"sl":42}],"name":"CsmString","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1029":{"methods":[{"sl":31}],"name":"testRemoveStatementFromMethodBodyWithLexicalPreservingPrinter","pass":true,"statements":[{"sl":32}]},"test_1220":{"methods":[{"sl":35}],"name":"printingExamplePrettyPrintVisitor","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":39}]},"test_1822":{"methods":[{"sl":35}],"name":"printingExampleJavaConcepts","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1029], [1029], [], [], [1220, 1822], [], [1220, 1822], [1220, 1822], [1220, 1822], [], [], [], [], [], [], [], []]
