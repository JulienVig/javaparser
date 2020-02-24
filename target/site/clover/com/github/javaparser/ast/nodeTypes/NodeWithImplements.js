var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":88,"id":32214,"methods":[{"el":38,"sc":5,"sl":36},{"el":48,"sc":5,"sl":44},{"el":54,"sc":5,"sl":50},{"el":59,"sc":5,"sl":57},{"el":64,"sc":5,"sl":62},{"el":76,"sc":5,"sl":72},{"el":87,"sc":5,"sl":84}],"name":"NodeWithImplements","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1004":{"methods":[{"sl":36}],"name":"interfaceUsingImplements","pass":true,"statements":[{"sl":37}]},"test_1205":{"methods":[{"sl":36},{"sl":72},{"sl":84}],"name":"testAddImplements","pass":true,"statements":[{"sl":37},{"sl":74},{"sl":75},{"sl":85},{"sl":86}]},"test_1614":{"methods":[{"sl":36},{"sl":72},{"sl":84}],"name":"testAddImplements","pass":true,"statements":[{"sl":37},{"sl":74},{"sl":75},{"sl":85},{"sl":86}]},"test_1939":{"methods":[{"sl":72}],"name":"addingImplementedTypes","pass":true,"statements":[{"sl":74},{"sl":75}]},"test_76":{"methods":[{"sl":36}],"name":"testTypesWithSameNameInPackageAndNested_directImplements","pass":true,"statements":[{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1004, 1614, 76, 1205], [1004, 1614, 76, 1205], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1939, 1614, 1205], [], [1939, 1614, 1205], [1939, 1614, 1205], [], [], [], [], [], [], [], [], [1614, 1205], [1614, 1205], [1614, 1205], [], []]
