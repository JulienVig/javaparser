var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":27260,"methods":[{"el":39,"sc":5,"sl":35},{"el":44,"sc":5,"sl":41},{"el":55,"sc":5,"sl":46}],"name":"YieldStmtTest","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1055":{"methods":[{"sl":35}],"name":"yield","pass":true,"statements":[{"sl":37},{"sl":38}]},"test_1155":{"methods":[{"sl":46}],"name":"keywordShouldNotInterfereWithIdentifiers","pass":true,"statements":[{"sl":48},{"sl":49}]},"test_1953":{"methods":[{"sl":41}],"name":"threadYieldShouldNotBreak","pass":true,"statements":[{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1055], [], [1055], [1055], [], [], [1953], [], [1953], [], [], [1155], [], [1155], [1155], [], [], [], [], [], [], []]
