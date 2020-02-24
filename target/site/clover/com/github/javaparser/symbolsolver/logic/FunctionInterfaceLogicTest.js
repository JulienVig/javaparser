var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":19920,"methods":[{"el":44,"sc":5,"sl":39},{"el":55,"sc":5,"sl":46}],"name":"FunctionInterfaceLogicTest","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_200":{"methods":[{"sl":39}],"name":"testGetFunctionalMethodNegativeCaseOnClass","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43}]},"test_729":{"methods":[{"sl":46}],"name":"testGetFunctionalMethodPositiveCasesOnInterfaces","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [200], [], [200], [200], [200], [], [], [729], [], [729], [729], [729], [729], [729], [729], [729], [], []]
