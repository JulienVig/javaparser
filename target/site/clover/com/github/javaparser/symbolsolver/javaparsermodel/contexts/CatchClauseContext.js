var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":92,"id":9184,"methods":[{"el":48,"sc":5,"sl":46},{"el":59,"sc":5,"sl":50},{"el":72,"sc":5,"sl":61},{"el":78,"sc":5,"sl":74},{"el":83,"sc":5,"sl":80},{"el":91,"sc":5,"sl":85}],"name":"CatchClauseContext","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_138":{"methods":[{"sl":46},{"sl":50}],"name":"solvingReferenceToCatchClauseParam","pass":true,"statements":[{"sl":47},{"sl":51},{"sl":52},{"sl":53},{"sl":54}]},"test_166":{"methods":[{"sl":46},{"sl":85}],"name":"parametersExposedToChildWithinTryStatement","pass":true,"statements":[{"sl":47},{"sl":87},{"sl":88},{"sl":90}]},"test_324":{"methods":[{"sl":46},{"sl":50}],"name":"issue1482","pass":true,"statements":[{"sl":47},{"sl":51},{"sl":52},{"sl":53},{"sl":54}]},"test_347":{"methods":[{"sl":46},{"sl":50}],"name":"solvingReferenceToUnsupportedOperationException","pass":true,"statements":[{"sl":47},{"sl":51},{"sl":52},{"sl":53},{"sl":54}]},"test_403":{"methods":[{"sl":46},{"sl":80},{"sl":85}],"name":"ambiguousNameToCatchParameter","pass":true,"statements":[{"sl":47},{"sl":82},{"sl":87},{"sl":88}]},"test_765":{"methods":[{"sl":46}],"name":"solveMultiCatchType","pass":true,"statements":[{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [403, 166, 347, 138, 765, 324], [403, 166, 347, 138, 765, 324], [], [], [347, 138, 324], [347, 138, 324], [347, 138, 324], [347, 138, 324], [347, 138, 324], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [403], [], [403], [], [], [403, 166], [], [403, 166], [403, 166], [], [166], [], []]
