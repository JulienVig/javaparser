var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":59047,"methods":[{"el":36,"sc":5,"sl":31},{"el":45,"sc":5,"sl":38},{"el":54,"sc":5,"sl":47}],"name":"ThisExprTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1311":{"methods":[{"sl":38}],"name":"singleScopeThis","pass":true,"statements":[{"sl":40},{"sl":42},{"sl":44}]},"test_1532":{"methods":[{"sl":47}],"name":"multiScopeThis","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":53}]},"test_1698":{"methods":[{"sl":31}],"name":"justThis","pass":true,"statements":[{"sl":33},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1698], [], [1698], [], [1698], [], [], [1311], [], [1311], [], [1311], [], [1311], [], [], [1532], [], [1532], [], [1532], [], [1532], [], []]
