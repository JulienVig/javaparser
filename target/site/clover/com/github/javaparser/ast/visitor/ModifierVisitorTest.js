var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":145,"id":53388,"methods":[{"el":66,"sc":13,"sl":51},{"el":76,"sc":5,"sl":42},{"el":87,"sc":13,"sl":82},{"el":90,"sc":5,"sl":78},{"el":101,"sc":13,"sl":96},{"el":104,"sc":5,"sl":92},{"el":113,"sc":13,"sl":111},{"el":117,"sc":5,"sl":106},{"el":126,"sc":13,"sl":124},{"el":130,"sc":5,"sl":119},{"el":144,"sc":5,"sl":132}],"name":"ModifierVisitorTest","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1098":{"methods":[{"sl":119},{"sl":124}],"name":"variableDeclarationCantSurviveWithoutVariables","pass":true,"statements":[{"sl":121},{"sl":123},{"sl":125},{"sl":129}]},"test_1188":{"methods":[{"sl":42},{"sl":51}],"name":"makeSureParentListsCanBeModified","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":50},{"sl":53},{"sl":55},{"sl":56},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":65},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75}]},"test_1294":{"methods":[{"sl":106},{"sl":111}],"name":"fieldDeclarationCantSurviveWithoutVariables","pass":true,"statements":[{"sl":108},{"sl":110},{"sl":112},{"sl":116}]},"test_1420":{"methods":[{"sl":132}],"name":"issue2124","pass":true,"statements":[{"sl":134},{"sl":135},{"sl":141},{"sl":142},{"sl":143}]},"test_1785":{"methods":[{"sl":92},{"sl":96}],"name":"binaryExprReturnsRightExpressionWhenLeftSideIsRemoved","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":100},{"sl":103}]},"test_1808":{"methods":[{"sl":78},{"sl":82}],"name":"binaryExprReturnsLeftExpressionWhenRightSideIsRemoved","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":89}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1188], [], [1188], [1188], [1188], [1188], [1188], [], [1188], [1188], [], [1188], [], [1188], [1188], [], [1188], [1188], [], [1188], [1188], [], [], [1188], [], [], [], [1188], [1188], [1188], [1188], [1188], [1188], [1188], [], [], [1808], [], [1808], [1808], [1808], [1808], [1808], [], [1808], [], [], [1808], [], [], [1785], [], [1785], [1785], [1785], [1785], [1785], [], [1785], [], [], [1785], [], [], [1294], [], [1294], [], [1294], [1294], [1294], [], [], [], [1294], [], [], [1098], [], [1098], [], [1098], [1098], [1098], [], [], [], [1098], [], [], [1420], [], [1420], [1420], [], [], [], [], [], [1420], [1420], [1420], [], []]
