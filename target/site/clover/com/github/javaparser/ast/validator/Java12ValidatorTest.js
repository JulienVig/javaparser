var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":54916,"methods":[{"el":42,"sc":5,"sl":38},{"el":48,"sc":5,"sl":44},{"el":54,"sc":5,"sl":50}],"name":"Java12ValidatorTest","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1086":{"methods":[{"sl":44}],"name":"switchExpressionNotAllowed","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_1207":{"methods":[{"sl":38}],"name":"expressionsInLabelsNotAllowed","pass":true,"statements":[{"sl":40},{"sl":41}]},"test_1331":{"methods":[{"sl":50}],"name":"multiLabelCaseAllowed","pass":true,"statements":[{"sl":52},{"sl":53}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1207], [], [1207], [1207], [], [], [1086], [], [1086], [1086], [], [], [1331], [], [1331], [1331], [], []]
