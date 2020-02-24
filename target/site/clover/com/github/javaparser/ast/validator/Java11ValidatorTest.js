var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":54907,"methods":[{"el":43,"sc":5,"sl":39},{"el":49,"sc":5,"sl":45},{"el":55,"sc":5,"sl":51}],"name":"Java11ValidatorTest","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1048":{"methods":[{"sl":39}],"name":"varAllowedInLocalVariableDeclaration","pass":true,"statements":[{"sl":41},{"sl":42}]},"test_1218":{"methods":[{"sl":45}],"name":"switchExpressionNotAllowed","pass":true,"statements":[{"sl":47},{"sl":48}]},"test_1761":{"methods":[{"sl":51}],"name":"multiLabelCaseNotAllowed","pass":true,"statements":[{"sl":53},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1048], [], [1048], [1048], [], [], [1218], [], [1218], [1218], [], [], [1761], [], [1761], [1761], [], []]
